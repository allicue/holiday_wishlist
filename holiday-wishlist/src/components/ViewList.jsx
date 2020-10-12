import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import axios from "axios";
import './ViewList.css';
import EditList from './EditList';

function ViewList(props) {

  return (
    <div>
      <Switch>
      <Route path="/viewlist">
          <h2 className="subheaderviewwishlist">WISHLIST</h2>
          <h3 className="captionviewwishlist">Click on the item you purchased to mark</h3>

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