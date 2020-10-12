import React from 'react';
import NavBar from './NavBar';
import './App.css';
import ViewList from './ViewList'
import CountdownClocks from "./CountdownChristmas"
import { Route } from 'react-router-dom';
import Footer from "./Footer"
import EditList from './EditList';
import CountdownHanukkah from './CountdownHanukkah'
import CountdownChristmas from './CountdownChristmas';

function Homepage(props) {
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
        <ViewList />
      </div>

      <div>
        <EditList />
      </div>
      <div>
        {/* <Footer /> */}
      </div>

    </div>
  );
}

export default Homepage;