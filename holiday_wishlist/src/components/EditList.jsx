import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import './EditList.css';
import Item from './Item';
import axios from "axios";

function EditList(props) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");


  //ADD ITEM TO DATABASE
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      notes,
      price: parseFloat(price),
      itemurl: url,
    };

  
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/holiday-wishlist`;
  await axios.post(
    airtableURL,
    { fields },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    }
  );
  props.setFetchItems(!props.fetchItems);

  setTitle("");
  setNotes("");
  setPrice("");
  setUrl("");
  };

  return (
    <div>
      <Switch>
        <Route path="/editlist">

        <h2 className="subheadereditlist">MANAGE LIST</h2>
          {props.listItems && 
          <div className="wishlistcontainer">
              {props.listItems.map((item) => 
                <Item
                  item={item}
                  fetchItems={props.fetchItems}
                  setFetchItems={props.setFetchItems}
                  canDelete
                />
              )}
            </div>
          }
          
          <h2 className="subheadereditlist">ADD ITEM TO LIST</h2>
          <form className="add-item-form" onSubmit={handleSubmit} >
            <label htmlFor="title">ITEM:</label>
            <input
              name="title"
              type="text"
              placeholder="Name of the item you would like"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="notes">NOTES:</label>
            <input
              name="notes"
              type="text"
              placeholder="Notes about product"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <label htmlFor="price">PRICE:</label>
            <input
              name="price"
              type="number"
              placeholder="Cost of the product"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="url">URL:</label>
            <input
              name="url"
              type="url"
              placeholder="Enter the link of the product"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="add-item-button" type="submit">ADD ITEM</button>
          </form>
        </Route>
      </Switch>
    </div>
  );
}

export default EditList;