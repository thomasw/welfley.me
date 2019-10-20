// @flow
import React from 'react';

import styles from './YolaDemo.module.scss';

export default function YolaDemo() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Yola</h1>
        <h2>
          13 million users. 9 million websites.
          <span className={styles.cursor}>&nbsp;</span>
        </h2>
      </div>
    </div>
  );
}
