
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

        <Route path="/home">
          <Home></Home>

        </Route>
          <Route path="/about">
           
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/">
          <Home></Home>
           
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
