import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import './EditList.css';
import ViewList from './ViewList';
import axios from "axios";

function EditList(props) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [price, setPrice] = useState(0);
  const [url, setUrl] = useState("");


  const handleSubmit = async (e) => {
    // prevent page reload.
    e.preventDefault();
    // fields object holds the item name and other info
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
          <h2>Add Item to List</h2>
          <form className="add-item-form" onSubmit={handleSubmit} >
            <label htmlFor="title">Item:</label>
            <input
              name="title"
              type="text"
              placeholder="Name of the item you would like"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="notes">Notes:</label>
            <input
              name="notes"
              type="text"
              placeholder="Notes about product"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <label htmlFor="price">Price:</label>
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
            <button classNamme="add-item-button" type="submit">Submit Additional Item</button>
          </form>

        </Route>
      </Switch>
    </div>
  );
}

export default EditList;