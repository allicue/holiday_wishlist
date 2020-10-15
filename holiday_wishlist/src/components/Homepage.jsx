import React, { useEffect, useState } from 'react';
import axios from "axios";
import CountdownHanukkah from './CountdownHanukkah';
import CountdownChristmas from './CountdownChristmas';
import EditList from './EditList';
import Footer from "./Footer";
import './Homepage.css';
import NavBar from './NavBar';
import { Route, NavLink } from 'react-router-dom';
import ViewList from './ViewList';


function Homepage(props) {
  const [listItems, setListItems] = useState("")
  const [fetchItems, setFetchItems] = useState(false);
  
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
  }, [fetchItems]);


  return (
    <div className="App">
      <div className="header">
        <header>
          <h1 className="web-title">HOLIDAY WISHLIST</h1>
        </header>
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      
      <Route exact path="/">
        <div>
          <h3 className="homepagesubtitle">Create a wishlist of items to send to your family and friends this holiday season. Get started by building your list <NavLink className="description-link" to="/editlist">here</NavLink>.</h3>
          <h2 className="countdownsubtitle">COUNTDOWN UNTIL</h2>
          <div className="countdowncontainer">
            <section className="christmascontainer">
              <CountdownChristmas /> 
            </section>
            <section className="hanukkahcontainer">
            <CountdownHanukkah />
            </section>
          </div>
      </div>
      </Route>

      <div>
        <ViewList
          listItems={listItems}
          fetchItems={fetchItems}
          setFetchItems={setFetchItems}
        />
      </div>

      <div>
        <EditList
          listItems={listItems}
          fetchItems={fetchItems}
          setFetchItems={setFetchItems}
        />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Homepage;