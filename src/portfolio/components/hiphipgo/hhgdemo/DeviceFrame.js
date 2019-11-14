// @flow
import * as React from 'react';
import cx from 'classnames';

import type { HTMLElementProps } from 'types';
import styles from './DeviceFrame.module.scss';

type Props = {|
  ...HTMLElementProps,
  shake?: boolean
|};

export default function DeviceFrame(props: Props) {
  const { children, className, shake = false, ...divProps } = props;
  const mergedClass = cx(styles.container, className, {
    [styles.shake]: shake
  });

  return (
    <div className={mergedClass} aria-hidden {...divProps}>
      {children}
    </div>
  );
}
