// @flow
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavHashLink as Link } from 'react-router-hash-link';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { LimitWidth } from './layout';

import styles from './BreadCrumb.module.scss';

type Props = {
  children?: React.Node
};

export default function BreadCrumb(props: Props) {
  return (
    <LimitWidth className={styles.container}>
      <Link to="/" className={styles.back} aria-label="Back to Portfolio">
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />{' '}
        <span className={styles.backText}>Back to Portfolio</span>
      </Link>
      <div className={styles.secondaryActions}>{props.children || null}</div>
    </LimitWidth>
  );
}
