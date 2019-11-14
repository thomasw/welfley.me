// @flow
import * as React from 'react';
import cx from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { HTMLElementProps } from 'types';
import styles from './Button.module.scss';

type Props = {|
  loading?: boolean,
  iconLoadingClassName?: string,
  icon: string,
  ...HTMLElementProps
|};

export default function Button(props: Props) {
  const {
    className,
    loading = false,
    icon,
    children,
    iconLoadingClassName = '',
    ...inputProps
  } = props;
  const combinedClass = cx(
    styles.button,
    { [styles.withIcon]: !!icon },
    className
  );

  const iconClass = cx({ [iconLoadingClassName]: loading });

  return (
    <button className={combinedClass} disabled={loading} {...inputProps}>
      {icon && (
        <span className={iconClass}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {children}
    </button>
  );
}
