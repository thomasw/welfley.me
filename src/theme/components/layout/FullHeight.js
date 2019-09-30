// @flow
import * as React from 'react';
import classes from 'classnames';

import styles from './FullHeight.module.css';

type Props = {
  className?: string
};

export default function FullHeight(props: Props) {
  return (
    <div {...props} className={classes(styles.container, props.className)} />
  );
}
