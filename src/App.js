// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import makeStore from './store';
import { NoticeManager } from 'notices';
import AnimatedSwitch from 'router/components/AnimatedSwitch';
import Home from 'views/Home';
import Resume from 'resume/views/Resume';
import FourOhFour from 'views/FourOhFour';

import './App.css';

const store = makeStore();

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Router>
          <AnimatedSwitch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" exact component={Resume} />
            <Route component={FourOhFour} />
          </AnimatedSwitch>
        </Router>
        <NoticeManager />
      </HelmetProvider>
    </Provider>
  );
}

export default App;
