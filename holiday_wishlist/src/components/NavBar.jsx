import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function NavBar() {
  return (
    <div className="navbar">
      <Link className="navbarlinka" to="/editlist">EDIT LIST</Link>
      <Link className="navbarlinkb" to="/viewlist">VIEW LIST</Link>
      <Link className="navbarlinkb" to="/">HOME</Link>
    </div>
  );
}

export default NavBar;