// @flow
import React from 'react';
import cx from 'classnames';

import type { HTMLElementProps } from 'types';
import styles from './Columns.module.scss';

export default function LimitWidth(props: HTMLElementProps) {
  const { className, ...mainProps } = props;
  return <div className={cx(styles.limitWidth, className)} {...mainProps} />;
}
