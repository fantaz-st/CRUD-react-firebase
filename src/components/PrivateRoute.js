import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import { useAuth } from '../store/auth-context';

const PrivateRoute = ({ element: Component, ...rest }) => {
  console.log(...rest);
  const { currentUser } = useAuth();

  console.log('current user: ' + currentUser?.email);

  // return currentUser ? Component : <Navigate to="/login" />;

  // const ele = currentUser === true ? element : <Navigate to="/login" replace />;

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? <Component {...props} /> : <Navigate to="/login" />;
        }}
      ></Route>
    </Routes>
  );
};

export default PrivateRoute;
