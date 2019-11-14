// @flow
import * as React from 'react';
import cx from 'classnames';

import type { TextAreaElementProps } from 'types';
import styles from './Input.module.scss';

type Props = {|
  validated: boolean,
  ...TextAreaElementProps
|};

export default function TextBox(props: Props) {
  const { className, validated, ...inputProps } = props;
  const combinedClass = cx(
    styles.input,
    { [styles.validated]: validated },
    className
  );

  return <textarea className={combinedClass} {...inputProps} />;
}
