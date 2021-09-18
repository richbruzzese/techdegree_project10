import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import axios from 'axios';



import Header from './components/Header'
import Courses from './components/Courses'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Courses} />
      </Switch>
    </BrowserRouter>
    )
}

export default App;
