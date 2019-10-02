// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import makeStore from './store';
import { NoticeManager } from 'notices';
import ScrollManager from 'router/components/ScrollManager';
import AnimatedSwitch from 'router/components/AnimatedSwitch';
import TrailingSlashRedirect from 'router/components/TrailingSlashRedirect';
import Home from 'views/Home';
import Resume from 'resume/views/Resume';
import FourOhFour from 'views/FourOhFour';

import './App.scss';

const store = makeStore();

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Router>
          <AnimatedSwitch>
            <Route
              exact
              strict
              path="/:url*"
              component={TrailingSlashRedirect}
            />
            <Route path="/" exact component={Home} />
            <Route path="/resume/" exact component={Resume} />
            <Route component={FourOhFour} />
          </AnimatedSwitch>
          <ScrollManager />
        </Router>
        <NoticeManager />
      </HelmetProvider>
    </Provider>
  );
}

export default App;
