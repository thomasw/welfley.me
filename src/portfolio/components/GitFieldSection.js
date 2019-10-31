// @flow
import * as React from 'react';
import cx from 'classnames';

import { LimitWidth, Overlay } from 'theme/components/layout';

import styles from './GitFieldSection.module.scss';

type Props = { children: React.Node, className?: string };

export default function GitFieldSection(props: Props) {
  const { children, className, ...containerProps } = props;
  const mergedClassName = cx(styles.container, className);

  return (
    <section {...containerProps} className={mergedClassName}>
      <LimitWidth className={styles.content}>{children}</LimitWidth>
      <Overlay className={styles.bg} />
    </section>
  );
}
