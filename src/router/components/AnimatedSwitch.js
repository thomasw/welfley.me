// @flow
import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './AnimatedSwitch.module.scss';

function AnimatedSwitch({ location, children }) {
  // Typically we'd use location.key here to transition whenever the state
  // changes. However, we have smooth scrolling effects in place for certain
  // hash links and we don't want the transitions to fire in those cases.
  const transitionKey = location.pathname;

  return (
    <TransitionGroup>
      <CSSTransition key={transitionKey} classNames={styles} timeout={500}>
        <Switch location={location}>{children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(AnimatedSwitch);
