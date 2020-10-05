import React, { useState } from 'react';
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
import Info from '../../pages/Info'

export default function App() {
  const jogsService = new JogsService()
  const[showPicker,setShowPicker] = useState(false)
  const { getJogs, addJog } = jogsService;
  const parentCallback = (dataFromChild) => {
   setShowPicker(dataFromChild)
  }
  return (
    <div className="App">
      <Router>
        <Header setShowPicker={parentCallback}/>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path='/jogs'>
            <Jogs getJogs={getJogs} showPicker={showPicker}/>
          </Route>
          <Route path='/add'>
            <AddJog addJog={addJog}/>
          </Route>
          <Route path='/info'>
            <Info/>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}


