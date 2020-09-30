import React from 'react';
import './App.scss'
import Header from "../Header";
import Login from "../../pages/Login";
import Jogs from "../../pages/Jogs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddJog from "../../pages/AddJog";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/jogs'>
            <Jogs/>
          </Route>
          <Route path='/add'>
            <AddJog/>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}


