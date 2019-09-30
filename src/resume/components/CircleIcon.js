// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';

import styles from './CircleIcon.module.scss';

type Props = {
  className?: string
};

export default function CirlceIcon(props: Props) {
  const { className, ...faProps } = props;
  return (
    <FontAwesomeIcon
      className={cx(styles.container, className)}
      fixedWidth
      {...faProps}
    />
  );
}
