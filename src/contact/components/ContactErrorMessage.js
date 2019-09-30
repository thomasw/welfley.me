// @flow
import React from 'react';
import { useSelector } from 'react-redux';

import FadeTransition from 'theme/components/FadeTransition';

import { didSendingMessageFail } from '../selectors';

import styles from './ContactErrorMessage.module.scss';

export default function ContactErrorMessage() {
  const error = useSelector(didSendingMessageFail);

  return (
    <FadeTransition sceneId={error}>
      {error ? (
        <p className={styles.container}>
          Oh no! We couldn't send your message right now. Please try again in
          just a bit.
        </p>
      ) : (
        <div />
      )}
    </FadeTransition>
  );
}
