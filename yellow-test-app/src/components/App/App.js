import React from 'react';
import './App.scss'
import Header from "../Header";
import Login from "../../pages/Login";
import Jogs from "../../pages/Jogs";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path='/login' component={Login}/>
        <Route path='/jogs' component={Jogs}/>
      </Router>

    </div>
  );
}


