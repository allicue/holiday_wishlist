import React from 'react';
import { NavLink } from 'react-router-dom';
import './Homepage.css';

function NavBar() {
  let activeStyle = {
    borderBottom: "2px solid white",
  }
  
  return (
    <div className="navbar">
      <NavLink activeStyle={activeStyle} className="navbarlinka" to="/editlist">EDIT LIST</NavLink>
      <NavLink activeStyle={activeStyle} className="navbarlinkb" to="/viewlist">VIEW LIST</NavLink>
      <NavLink activeStyle={activeStyle} className="navbarlinkb" exact to="/">HOME</NavLink>
    </div>
  );
}

export default NavBar;