import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
  import PrivateRoute from './PrivateRoute'
import axios from 'axios';



import Header from './components/Header'
import Courses from './components/Courses'
import userSignIn from './components/UserSignIn';
import userSignUp from './components/UserSignUp';
import userSignOut from './components/UserSignOut';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Courses} />
        {/* private routes */}
        <PrivateRoute path='/courses/:id/update' component={UpdateCourse} />
        <PrivateRoute path='/courses/create' component={CreateCourse} />
        <Route path="courses/:id" component={CourseDetail} />
        <Route path="/signin" component={userSignIn} />
        <Route path="/signout" component={userSignOut} />
        <Route path="/signup" component={userSignUp} />


      </Switch>
    </BrowserRouter>
    )
}

export default App;
