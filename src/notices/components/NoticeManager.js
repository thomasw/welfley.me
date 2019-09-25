// @flow
import React from 'react';

import { Overlay } from 'theme/components/layout';
import styles from './NoticeManager.module.scss';

type Props = {|
  message?: string
|};

export default function NoticeManager(props: Props) {
  const { message } = props;

  if (!message) return null;

  return (
    <Overlay className={styles.container}>
      <h1>{message}</h1>
    </Overlay>
  );
}
