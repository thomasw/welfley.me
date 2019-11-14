// @flow
import * as React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { AElementProps } from 'types';
import styles from './Button.module.scss';

type Props = {|
  icon?: string,
  ...AElementProps
|};

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
