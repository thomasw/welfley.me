// @flow
import * as React from 'react';
import cx from 'classnames';

import type { HTMLElementProps } from 'types';
import styles from './DeviceFrame.module.scss';

export default function DeviceFrame(props: HTMLElementProps) {
  const { children, className, ...divProps } = props;
  const mergedClass = cx(styles.container, className);

  return (
    <div aria-hidden {...divProps} className={mergedClass}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
