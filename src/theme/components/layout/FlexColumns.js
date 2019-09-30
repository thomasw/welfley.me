// @flow
import * as React from 'react';
import cx from 'classnames';

import styles from './Columns.module.scss';

type Props = {
  children: React.Node,
  className?: string
};

export default function FlexColumns(props: Props) {
  const { children, className } = props;
  return (
    <div className={cx(styles.columns, className, styles.flex)}>{children}</div>
  );
}
