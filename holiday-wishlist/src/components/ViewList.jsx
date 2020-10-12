import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import axios from "axios";
import './ViewList.css';
import EditList from './EditList';

function ViewList(props) {
  const [listItems, setListItems] = useState("")
  const [fetchItems, setFetchItems] = useState(false);

  useEffect(() => {
    const getListItems = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/holiday-wishlist`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setListItems(response.data.records);
      console.log(response.data.records)
    };
    getListItems();
  }, [setFetchItems]);


  return (
    <div>
      <Switch>
      <Route path="/viewlist">
          <h2>WISHLIST</h2>
          <h3>Click on the item you purchased to mark</h3>

          {listItems && 
          <div className="wishlistcontainer">
              {listItems.map((item) => 
                <section className="wishlistitem">
                  <p className="itemtitle">Item: {props.listItems.title}</p>
                  <p>Price: ${item.fields.price}</p>
                  <p>Comments: {item.fields.notes}</p>
                  <a href={item.fields.itemurl}
                    target="_blank"
                    className="purchasebutton">PURCHASE HERE</a>
                </section>
              )}
            </div>
          }
        </Route>
        </Switch>
    </div>
  );
}

export default ViewList;