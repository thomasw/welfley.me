// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FadeTransition from 'theme/components/FadeTransition';
import { Overlay } from 'theme/components/layout';

import { clearNotice } from '../actions';
import { getNotice } from '../selectors';

import styles from './NoticeManager.module.scss';

export default function NoticeManager() {
  const notice = useSelector(getNotice);
  const dispatch = useDispatch();
  const boundClearNotice = () => dispatch(clearNotice());

  return (
    <FadeTransition sceneId={notice}>
      {notice ? (
        <Overlay className={styles.container} onClick={boundClearNotice}>
          <h1>{notice}</h1>
        </Overlay>
      ) : (
        <div className={styles.placeholder} />
      )}
    </FadeTransition>
  );
}
