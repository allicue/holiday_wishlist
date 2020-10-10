import React from 'react';
import axios from 'axios';
import Homepage from "./Homepage"
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage />      
    </div>
  );
}

export default App;
