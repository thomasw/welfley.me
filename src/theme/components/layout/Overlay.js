// @flow
import React from 'react';
import cx from 'classnames';

import styles from './Overlay.module.scss';

type Props = {
  className?: string
};

export default function overlay(props: Props) {
  const { className, ...otherProps } = props;
  return <div className={cx(styles.overlay, className)} {...otherProps} />;
}
