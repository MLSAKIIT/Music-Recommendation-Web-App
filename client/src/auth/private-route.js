//Added private routes so that people with login credentials only can view the page
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/",state:{ from: props.location}}}/>
      )
    }
  />
);

export default PrivateRoute;