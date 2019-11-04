// @flow
import * as React from 'react';
import cx from 'classnames';

import styles from './DeviceFrame.module.scss';

type Props = {
  children: React.Node,
  shake?: boolean,
  className?: string
};

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
