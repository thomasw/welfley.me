// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import AnimatedSwitch from 'router/components/AnimatedSwitch';
import Home from 'views/Home';
import FourOhFour from 'views/FourOhFour';

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AnimatedSwitch>
          <Route path="/" exact component={Home} />
          <Route component={FourOhFour} />
        </AnimatedSwitch>
      </Router>
    </HelmetProvider>
  );
}

export default App;
