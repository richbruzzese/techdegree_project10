import {useContext, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from '../Context';


//On selection of signout button handles the signOut method from Context
//and redirects to the root
const UserSignOut =  () => {

  const {actions} = useContext(Context)
  useEffect(() => actions.signOut())

  return (
    <Redirect to="/" />
  );
}

export default UserSignOut