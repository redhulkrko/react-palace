import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { checkLoggedIn } from "../util/session";

import "./xApp.css";
// import "../script";

import { AuthRoute, ProtectedRoute } from "./Login";
import AddFilm from "./AddFilm";
import Movies from "./xMovies";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./xAdmin";
import Dashboard from "./xDashboard";
import AdminPage from "./xPage";
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show";
import List from "./List";
import Reviews from "./Reviews";
import BoxOffice from "./BoxOffice";
import Trash from "./Trash";
const history = createBrowserHistory();






export const MyTestStore = React.createContext({})

  
export default ((props) => {
    const [state, setState] = useState({})
    useEffect(() => {
    
      async function appCheckLoggedIn() {
        const result = await checkLoggedIn();
      if (result) { 
      console.log({user, verified: true})
      console.log(result.session);
      const user = result.session
      setState({user, verified: true})
      } else {
      console.log({verified: true})
      setState({verified: true})
      }
      }
      // Execute the created function directly
      
      appCheckLoggedIn();
    
    }, [])
    
  const loggedIn = !!state.user



    return (
  <>
    <MyTestStore.Provider value={{...state, setState}}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/list" component={List} />
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/signup" component={Signup} />

          <ProtectedRoute exact path="/admin" component={Dashboard} layout={AdminPage} />
          <ProtectedRoute exact path="/admin/movies" component={Movies} layout={AdminPage} />
          <ProtectedRoute exact path="/admin/movies/new" component={Create} layout={AdminPage} />
          <ProtectedRoute exact path="/admin/movies/edit/:_id" component={Edit} layout={AdminPage} />
          <ProtectedRoute exact path='/admin/movies/show/:_id' component={Show} layout={AdminPage} />

          <ProtectedRoute exact path="/admin/reviews" component={Reviews} layout={AdminPage} />
          <ProtectedRoute exact path="/admin/box-office" component={BoxOffice} layout={AdminPage} />
          <ProtectedRoute exact path="/admin/trash" component={Trash} layout={AdminPage} />
          {loggedIn && <Admin /> || null }
        </Switch>
      </Router>
    </MyTestStore.Provider>
  </>
)})


