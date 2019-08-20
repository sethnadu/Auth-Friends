import React from 'react';
import {Route, Link} from "react-router-dom";

import FormikLoginForm from "./Components/loginForm";
import FormikAddFriendForm from "./Components/addfriendform";
import PrivateRoute from "./Components/PrivateRoute.js"

import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Friends</Link>
        </li>
      </ul>
      <Route path="/login" component ={FormikLoginForm} />
      <PrivateRoute exact path="/protected" component={FormikAddFriendForm} />
    </div>
  );
}

export default App;
