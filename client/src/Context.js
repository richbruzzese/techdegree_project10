import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

export const Context = React.createContext(); 

export const Provider = (props) => {

  //Handles getting the authenticateduser cookie for the session
  const cookie = Cookies.get('authenticatedUser')
  const [authenticatedUser, setAuthUser] = useState(
    cookie 
    ? JSON.parse(cookie) 
    : null
  )

  const [data] = useState(new Data())
  
  //When user signs in will set the cookie
  const signIn = async (emailAddress, password) => {
    const user = await data.getUser(emailAddress, password);
    if (user !== null) {
      user.password = password
      setAuthUser(user)
      Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1})
    }
    return user;
  }

  //when user signs out, cookie is removed
  const signOut = () => {
    setAuthUser(null)
    Cookies.remove('authenticatedUser');
  }
  return (<Context.Provider value={{
    authenticatedUser,
    data,
    actions: {signIn, signOut}
  }}>
    {props.children}
  </Context.Provider>  
);


}

