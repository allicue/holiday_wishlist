import React from "react";
import BuyButton from './web-photos/buy.png';
import { Route, Switch } from 'react-router-dom';
import './ViewList.css';

function ViewList(props) {

      //CODE TO STRIKETHROUGH IF ALREADY PURCHASED
      // const [purchased, setPurchased] = useState(false)

      // const handleClicked = async (id) => {
      //   setPurchased(true)
      // }
  //onClick={(id) => handleClicked(item.id)} style={{ textDecoration: purchased ? "line-through" : "none" }}



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
                  <p className="itemtitle" >Item: {item.fields.title}</p>
                  <p>Price: ${item.fields.price}</p>
                  <p>Comments: {item.fields.notes}</p>
                  <a href={item.fields.itemurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="purchasebutton"><img src={BuyButton} alt="buy-icon"/></a>
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