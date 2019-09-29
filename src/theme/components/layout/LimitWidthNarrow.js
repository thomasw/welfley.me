// @flow
import React from 'react';
import cx from 'classnames';

import styles from './Columns.module.scss';

type Props = {
  className?: string
};

export default function LimitWidthNarrow(props: Props) {
  const { className, ...mainProps } = props;
  return (
    <div className={cx(styles.limitWidthNarrow, className)} {...mainProps} />
  );
}
