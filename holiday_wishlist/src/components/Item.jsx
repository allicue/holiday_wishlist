import React, { useState } from 'react';
import axios from "axios";
import BuyButton from './web-photos/buy.png';
import './Item.css';
import TrashCan from './web-photos/trash-can.png';

function Item(props) {
  
  const [deleted, setDeleted] = useState(false);
  
      // //CODE TO STRIKETHROUGH IF ALREADY PURCHASED
      const [purchased, setPurchased] = useState(false)

      const handleClicked = async (id) => {
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
    }, 500);
  };

  return (
    <div>
      <section className="wishlistitem">
        <p className="itemtitle" onClick={(id) => handleClicked(props.item.id)} style={{ textDecoration: purchased ? "line-through" : "none" }}>Item: {props.item.fields.title}</p>
        <p>Price: ${props.item.fields.price}</p>
        <p>Comments: {props.item.fields.notes}</p>
        <a href={props.item.fields.itemurl}
          target="_blank"
          rel="noopener noreferrer"
          className="purchasebutton"><img src={BuyButton} alt="buy-icon"/></a>
        <a disabled={deleted} onClick={(e)=> handleDelete(props.item.id)}><img src={TrashCan} alt="trash-icon" className="delete-button"/></a>
      </section>
    </div>
  );
}

export default Item;


