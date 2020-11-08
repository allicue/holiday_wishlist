import React from "react";
import Item from './Item';
import { Route, Switch } from 'react-router-dom';
import './ViewList.css';

function ViewList(props) {

  return (
    <div>
      <Switch>
      <Route path="/viewlist">
        <h2 className="subheaderviewwishlist">WISHLIST</h2>
        {/* <h3 className="captionviewwishlist">If you purchased an item below, click on the item name to cross it off.</h3> */}

        {props.listItems && 
          <div className="wishlistcontainer">
            {props.listItems.map((item) => 
              <Item
                item={item}
                fetchItems={props.fetchItems}
                setFetchItems={props.setFetchItems}
              />
            )}
          </div>
        }
          
      </Route>
      </Switch>
    </div>
  );
}

export default ViewList;