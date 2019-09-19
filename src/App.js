// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import FourOhFour from './views/FourOhFour';
import './App.css';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
}

export default App;
