// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Overlay } from 'theme/components/layout';

import { clearNotice } from '../actions';
import { getNotice } from '../selectors';

import styles from './NoticeManager.module.scss';

export default function NoticeManager() {
  const { container, placeholder, ...transitionStyles } = styles;
  const notice = useSelector(getNotice);
  const dispatch = useDispatch();
  const boundClearNotice = () => dispatch(clearNotice());

  return (
    <TransitionGroup>
      <CSSTransition key={notice} classNames={transitionStyles} timeout={500}>
        {notice ? (
          <Overlay className={container} onClick={boundClearNotice}>
            <h1>{notice}</h1>
          </Overlay>
        ) : (
          <div className={placeholder} />
        )}
      </CSSTransition>
    </TransitionGroup>
  );
}
