import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Play from "./containers/Play";

export default () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/play">Play</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/play" component={Play} />
    </div>
  </Router>
);
