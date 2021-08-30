import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  var Spinner = require("react-spinkit");
  const [preloader, setPreloader] = useState(true);
  setTimeout(() => {
    setPreloader(false);
  }, 3000);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      {preloader ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner  className="spinner" name="ball-grid-pulse" color="tomato" />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about"></Route>
            <Route path="/users"></Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
