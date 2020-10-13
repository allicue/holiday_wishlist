import React, { useState } from 'react';
import axios from "axios";

function Item(props) {
  
  const [deleted, setDeleted] = useState(false);
    //CODE TO STRIKETHROUGH IF ALREADY PURCHASED
    const [purchased, setPurchased] = useState(false)

    const handleClicked = async (e) => {
      setPurchased(true)
    }
  

  const handleDelete = async (id) => {
    setDeleted(true);
    setTimeout(async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/holiday-wishlist/${props.item.id}`
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      props.setFetchItems(!props.fetchItems);
      setDeleted(false);
    }, 1000);
  };

  return (
    <div>
      <section className="wishlistitem">
        <p className="itemtitle">Item: {props.item.fields.title}</p>
        <p>Price: ${props.item.fields.price}</p>
        <p>Comments: {props.item.fields.notes}</p>
        <a href={props.item.fields.itemurl}
          target="_blank"
          rel="noopener noreferrer"
          className="purchasebutton">PURCHASE HERE</a>
        <br></br>
        <button className="delete-button" disabled={deleted} onClick={(e)=> handleDelete(props.item.id)}>{deleted ? "Item Deleted" : "Delete Item"}</button>
      </section>
    </div>
  );
}

export default Item;


