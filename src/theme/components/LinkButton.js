// @flow
import * as React from 'react';
import cx from 'classnames';
import { NavHashLink as Link } from 'react-router-hash-link';

import styles from './Button.module.scss';

type Props = {
  className?: string
};

export default function LinkButton(props: Props) {
  const { className, ...inputProps } = props;
  const combinedClass = cx(styles.button, className);

  return <Link className={combinedClass} {...inputProps} />;
}
