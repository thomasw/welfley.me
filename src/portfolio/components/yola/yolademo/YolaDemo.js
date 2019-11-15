// @flow
import React from 'react';
import cx from 'classnames';

import type { HTMLElementProps } from 'types';
import styles from './YolaDemo.module.scss';

export default function YolaDemo(props: HTMLElementProps) {
  return (
    <div className={cx(styles.container, props.className)}>
      <div className={styles.content}>
        <h1>Yola</h1>
        <h2>Vice President of Engineering</h2>
        <h2>
          13 million users. 9 million websites.
          <span className={styles.cursor}>&nbsp;</span>
        </h2>
      </div>
    </div>
  );
}
