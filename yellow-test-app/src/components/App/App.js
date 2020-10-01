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
import { JogsService } from '../../services/jogsService.js'

export default function App() {
  const jogsService = new JogsService()
  const { getTest } = jogsService
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Login getTest={getTest}/>
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


