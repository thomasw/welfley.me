// @flow
import * as React from 'react';
import styles from './FullHeight.module.css';
import classes from 'classnames';

type Props = {
  className?: string
};

export default function FullHeight(props: Props) {
  return (
    <div {...props} className={classes(styles.container, props.className)} />
  );
}
