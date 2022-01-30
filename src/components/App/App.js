import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
