import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { checkLoggedIn } from "./util/session";

import Login, { AuthRoute, ProtectedRoute } from "./components/Login";

import Home from "./components/Home";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";

import "./Styles.css";

const history = createBrowserHistory();

export const MyTestStore = React.createContext({});

export default (props) => {
  const [state, setState] = useState({});
  useEffect(() => {
    async function appCheckLoggedIn() {
      const result = await checkLoggedIn();
      if (result) {
        console.log({ user, verified: true });
        console.log(result.session);
        const user = result.session;
        setState({ user, verified: true });
      } else {
        console.log({ verified: true });
        setState({ verified: true });
      }
    }

    appCheckLoggedIn();
  }, []);

  const loggedIn = !!state.user;
  console.log(loggedIn);

  return (
    <>
      <MyTestStore.Provider value={{ ...state, setState }}>
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Switch>
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/signup" component={Signup} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            {(loggedIn && <Admin />) || null}
          </Switch>
        </Router>
      </MyTestStore.Provider>
    </>
  );
};
