import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import axios from "axios";
import './ViewList.css'

function ViewList() {
  const [listItems, setListItems] = useState("")
  
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
  }, []);


  return (
    <div>
      <Switch>
      <Route path="/viewlist">
          <h3>WISHLIST</h3>

          {listItems && 
          <div className="wishlistcontainer">
              {listItems.map((item) => 
                <section className="wishlistitem">
                  <p>Item: {item.fields.title}</p>
                  <p>Price: ${item.fields.price}</p>
                  <p>Comments: {item.fields.notes}</p>
                  <a href={item.fields.itemurl}>PURCHASE HERE</a>
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