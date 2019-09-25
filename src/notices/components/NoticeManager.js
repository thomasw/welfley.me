// @flow
import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import type { State } from 'reducer';
import { Overlay } from 'theme/components/layout';

import { clearNotice } from '../actions';
import { getNotice } from '../selectors';

import styles from './NoticeManager.module.scss';

type MappedProps = {|
  notice?: string
|};

type MappedActions = {|
  clearNotice: () => Promise<null>
|};

type Props = {|
  ...MappedProps,
  ...MappedActions
|};

function NoticeManager({ notice, clearNotice }: Props) {
  const { container, placeholder, ...transitionStyles } = styles;

  return (
    <TransitionGroup>
      <CSSTransition key={notice} classNames={transitionStyles} timeout={500}>
        {notice ? (
          <Overlay className={container} onClick={clearNotice}>
            <h1>{notice}</h1>
          </Overlay>
        ) : (
          <div className={placeholder} />
        )}
      </CSSTransition>
    </TransitionGroup>
  );
}

function stateToProps(state: State): MappedProps {
  return {
    notice: getNotice(state.notices)
  };
}

export default connect(
  stateToProps,
  { clearNotice }
)(NoticeManager);
