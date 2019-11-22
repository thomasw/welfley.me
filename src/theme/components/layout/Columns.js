// @flow
import * as React from 'react';
import cx from 'classnames';

import styles from './Columns.module.scss';
import type { HTMLElementProps } from 'types';

type Props = {|
  children: React.Node,
  className?: string,
  ...HTMLElementProps
|};

export default function Columns(props: Props) {
  const { children, className, ...divProps } = props;

  return (
    <div className={cx(styles.columns, className)} {...divProps}>
      {children}
    </div>
  );
}
