import React, { useContext } from "react";

import { Redirect, Route, withRouter } from "react-router-dom";
import { MyTestStore } from '../components/App'


const Auth = ({ path, component: Component }) => {
  
  const { user, setState } = useContext(MyTestStore)
  const loggedIn = !!user
  console.log(loggedIn)
  console.log({user})
  return (
  <Route
    path={path}
    render={props => (
      loggedIn ?
      <Redirect to='/admin' /> :
      <Component {...props} />
    )}
  />
)}

export const ProtectedRoute = ({ path, component: Component, layout: Layout, ...rest }) => {
  const { user, setState } = useContext(MyTestStore)
  const loggedIn = !!user
  console.log({loggedIn})
  return (
  <Route
    {...rest}
    path={path}
    render={props => (
      loggedIn ?
      <Layout> 
        <Component {...props} /> 
      </Layout> :
      <Redirect to='/login' />
    )}
  />
)}

export const AuthRoute = withRouter(
  Auth
);

// export const ProtectedRoute = withRouter(
//   connect(mapStateToProps)(Protected)
// );