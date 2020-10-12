import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from './NavBar';
import './Homepage.css';
import ViewList from './ViewList';
import { Route } from 'react-router-dom';
import Footer from "./Footer"
import EditList from './EditList';
import CountdownHanukkah from './CountdownHanukkah';
import CountdownChristmas from './CountdownChristmas';

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