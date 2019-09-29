// @flow
import * as React from 'react';
import cx from 'classnames';

import CircleIcon from './CircleIcon';
import { LimitWidthNarrow } from 'theme/components/layout';

import styles from './Lolipop.module.scss';

type Props = {|
  className?: string,
  icon: string,
  children: React.Node
|};

export default function Lolipop(props: Props) {
  return (
    <LimitWidthNarrow className={cx(styles.container, props.className)}>
      <div className={styles.lolipop}>
        <div className={styles.lolipopStick} />
        <CircleIcon icon={props.icon} />
      </div>
      {props.children}
    </LimitWidthNarrow>
  );
}
