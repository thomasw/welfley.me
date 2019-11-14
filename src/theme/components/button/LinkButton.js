// @flow
import * as React from 'react';
import cx from 'classnames';

import { Link as TypedLink } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Button.module.scss';

type Props = {|
  ...$Exact<React.ElementConfig<typeof TypedLink>>,
  icon?: string,
  smooth?: boolean,
  scroll?: (el: React.Element<any>) => any
|};

export default function LinkButton(props: Props) {
  const { className, icon, children, ...linkProps } = props;
  const combinedClass = cx(
    styles.button,
    { [styles.withIcon]: !!icon },
    className
  );

  return (
    <Link className={combinedClass} {...linkProps}>
      {icon && (
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {children}
    </Link>
  );
}
