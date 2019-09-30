// @flow
import * as React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Button.module.scss';

type Props = {
  className?: string,
  icon?: string,
  children: React.Node
};

export default function AButton(props: Props) {
  const { className, icon, children, ...linkProps } = props;
  const combinedClass = cx(
    styles.button,
    { [styles.withIcon]: !!icon },
    className
  );

  return (
    <a className={combinedClass} {...linkProps}>
      {icon && (
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {children}
    </a>
  );
}
