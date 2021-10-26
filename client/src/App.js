import React, { useEffect } from 'react';
import Music from './components/Music-Library/Music';
import login from "./auth/login";
import register from "./auth/register";
import Alert from "./layout/Alert";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css'
import ChooseAction from './components/SawoLogIn/ChooseAction';
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import artists from './components/Artists-Selection/Artists';
import LoginPage from './components/SawoLogIn/SawoLogIn';


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
      <Navbar />
      
      <Alert />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/login" component={login} /> */}
          <Route  exact path="/" component={login} />
          <Route  exact path="/register" component={register} />
          <Route  path="/artists" component={artists} />  
          <Route  exact path="/loginSawo" component={LoginPage} />
          <Route  path="/loginSawo/choose-action" component={ChooseAction} />
          <Route  path="/music" component={Music} />
          
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
