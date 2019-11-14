// @flow
import React from 'react';
import cx from 'classnames';

import type { HTMLElementProps } from 'types';
import styles from './Overlay.module.scss';

type Props = HTMLElementProps;

export default function overlay(props: Props) {
  const { className, ...otherProps } = props;
  return <div className={cx(styles.overlay, className)} {...otherProps} />;
}
