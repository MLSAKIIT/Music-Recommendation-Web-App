<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Music from "./components/Music";
import Library from "./components/Library/Library";
=======
import React, { useEffect } from 'react';
import Music from './components/Music-Library/Music';
>>>>>>> b91435976080b770b6a4c7849bc6225ba6a5a6e2
import login from "./auth/login";
import register from "./auth/register";
import Alert from "./layout/Alert";
import { Switch, Route, BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

=======
import Navbar from './components/Navbar/Navbar';
import './App.css'
import ChooseAction from './components/SawoLogIn/ChooseAction';
>>>>>>> b91435976080b770b6a4c7849bc6225ba6a5a6e2
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
<<<<<<< HEAD
import artists from "./components/Artists";
=======
import artists from './components/Artists-Selection/Artists';
import LoginPage from './components/SawoLogIn/SawoLogIn';
import PrivateRoute from './auth/private-route';
>>>>>>> b91435976080b770b6a4c7849bc6225ba6a5a6e2

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
<<<<<<< HEAD
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/login" component={login} /> */}
          <Route exact path="/" component={login} />
          <Route exact path="/register" component={register} />
          <Route path="/artists" component={artists} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/library" component={Library} />
=======
          <Route  exact path="/" component={login} />
          <Route  exact path="/register" component={register} />
          <Route  exact path="/loginSawo" component={LoginPage} />
          <PrivateRoute component={artists} path="/artists" auth={localStorage.token} />     
          <Route  path="/loginSawo/choose-action" component={ChooseAction} />
          <PrivateRoute  path="/music" component={Music} auth={localStorage.token} />
>>>>>>> b91435976080b770b6a4c7849bc6225ba6a5a6e2
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
