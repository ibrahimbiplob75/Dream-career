import React, { Children, useContext } from 'react';
import { AuthContext } from '../Hook/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user}=useContext(AuthContext)

  if(user){
    {Children}
  }
  return <Navigate to={"/login"}></Navigate> ;
};

export default PrivateRoute;
