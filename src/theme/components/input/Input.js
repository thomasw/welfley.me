// @flow
import * as React from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

type Props = {
  validated: boolean,
  className?: string
};

export default function Input(props: Props) {
  const { className, validated, ...inputProps } = props;
  const combinedClass = cx(
    styles.input,
    { [styles.validated]: validated },
    className
  );

  return <input className={combinedClass} {...inputProps} />;
}
