import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import './ViewList.css';

function ViewList(props) {


    
  return (
    <div>
      <Switch>
      <Route path="/viewlist">
          <h2 className="subheaderviewwishlist">WISHLIST</h2>
          <h3 className="captionviewwishlist">If you purchased an item below,
          click on the item name to cross it off.</h3>

          {props.listItems && 
          <div className="wishlistcontainer">
              {props.listItems.map((item) => 
                <section className="wishlistitem">
                  <p className="itemtitle" onClick={(e) => handleClicked(item.id)} style={{ textDecoration: purchased ? "line-through" : "none" }} >Item: {item.fields.title}</p>
                  <p>Price: ${item.fields.price}</p>
                  <p>Comments: {item.fields.notes}</p>
                  <a href={item.fields.itemurl}
                    target="_blank"
                    rel="noopener noreferrer"
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