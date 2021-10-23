import React, { useEffect, useState } from "react";
import Music from "./components/Music";
import Library from "./components/Library/Library";
import login from "./auth/login";
import register from "./auth/register";
import Alert from "./layout/Alert";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import artists from "./components/Artists";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Alert />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/login" component={login} /> */}
          <Route exact path="/" component={login} />
          <Route exact path="/register" component={register} />
          <Route path="/artists" component={artists} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/library" component={Library} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
