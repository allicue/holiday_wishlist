import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import './EditList.css';
import axios from "axios";

function EditList(props) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [price, setPrice] = useState(0);
  const [url, setUrl] = useState("");


  //ADD ITEM TO DATABASE
  const handleSubmit = async (e) => {
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
  props.setFetchItem(!props.fetchItem);

  setTitle("");
  setNotes("");
  setPrice("");
  setUrl("");
  };
  
  //DELETE REQUEST
  // const [deleted, setDeleted] = useState(false);

  // const handleDelete = async () => {
  //   setDeleted(true);
  //   setTimeout(async () => {
  //     const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/holiday-wishlist/${listItems.id}`
  //     await axios.delete(airtableURL, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //       },
  //     });
  //     props.setFetchItems(!props.fetchItems);
  //     setDeleted(false);
  //   }, 1000);
  // };

  return (
    <div>
      <Switch>
        <Route path="/editlist">
          <h2 className="subheadereditlist">ADD ITEM TO LIST</h2>
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
            <button className="add-item-button" type="submit">Submit Additional Item</button>
          </form>

          <h2 className="subheadereditlist">MANAGE LIST</h2>
          {props.listItems && 
          <div className="wishlistcontainer">
              {props.listItems.map((item) => 
                <section className="wishlistitem">
                  <p className="itemtitle">Item: {item.fields.title}</p>
                  <p>Price: ${item.fields.price}</p>
                  <p>Comments: {item.fields.notes}</p>
                  <a href={item.fields.itemurl}
                    target="_blank"
                    className="purchasebutton">PURCHASE HERE</a>
                  <br></br>
                  {/* <button className="delete-button" onClick={handleDelete}>{deleted ? "Item Deleted" : "Delete Item"}</button> */}
                </section>
              )}
            </div>
          }
        </Route>
      </Switch>
    </div>
  );
}

export default EditList;