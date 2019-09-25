// @flow
import * as React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

type Props = {
  className?: string
};

export default function Button(props: Props) {
  const { className, ...inputProps } = props;
  const combinedClass = cx(styles.button, className);

  return <button className={combinedClass} {...inputProps} />;
}
