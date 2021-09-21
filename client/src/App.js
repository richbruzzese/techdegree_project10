import './App.css';
import React from 'react';
import { BrowserRouter,
  Route,
  Switch } from 'react-router-dom';
  import PrivateRoute from './PrivateRoute'




import Header from './components/Header'
import Courses from './components/Courses'
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import DeleteCourse from './components/DeleteCourse';
import Forbidden from './components/Forbidden';
import Error from './components/Error';
import NotFound from './components/NotFound'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Courses} />
        {/* private routes */}
        <PrivateRoute path='/courses/:id/update' component={UpdateCourse} />
        <PrivateRoute path='/courses/create' component={CreateCourse} />
        <PrivateRoute path='/courses/:id/delete' component={DeleteCourse} />
        <Route path="/courses/:id" component={CourseDetail} />
        <Route path="/signin" component={UserSignIn} />
        <Route path="/signout" component={UserSignOut} />
        <Route path="/signup" component={UserSignUp} />
        <Route path='/forbidden' component={Forbidden} />
        <Route path='/error' component={Error} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    )
}

export default App;
