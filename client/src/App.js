import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import axios from 'axios';

function App() {
  
  useEffect( () =>{
    axios.get(`http://localhost:5000/api/courses`)
    .then(res => console.log(res))
  })

  return (
    
    <div className="App">
      <header className="App-header">
        Test
        
      </header>
    </div>
  );
}

export default App;
