import './App.css';
import React from "react";
import Layout from './components/layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom'

import LandingPage from './pages/landing/LandingPage';
import CheckOutPage from './pages/checkout/CheckOutPage';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';

function App() {
  return (  
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products"/>
          </Route>
          <Route path="/products">
            <LandingPage />
          </Route>
          <Route path="/cart">
            <CheckOutPage />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
