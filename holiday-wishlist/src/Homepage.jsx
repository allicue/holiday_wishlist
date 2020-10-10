import React from 'react';
import NavBar from './NavBar';
import './App.css';
import ViewList from './ViewList'
import CountdownClocks from "./CountdownClocks"
import { Route } from 'react-router-dom';
import Footer from "./Footer"

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
              <CountdownClocks /> 
            </section>
            <section className="hanukkahcontainer">
            <CountdownClocks />
            </section>
          </div>
      </div>
      </Route>
      <div>
        <ViewList />
      </div>

      <div>
        {/* <Footer /> */}
      </div>

    </div>
  );
}

export default Homepage;