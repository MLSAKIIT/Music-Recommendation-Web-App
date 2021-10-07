import React, { useEffect } from 'react';
import Music from './components/Music';
import login from "./auth/login";
import register from "./auth/register";
import Alert from "./layout/Alert";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
// import { VscGithub } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";


import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Home from './components/Home';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Link style={{position: 'absolute', left: '1%'}} to='/'><FaHome size='40' /></Link>
      <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
          <Route exact path="/music" component={Music} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
