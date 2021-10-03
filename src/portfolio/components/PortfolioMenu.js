// @flow
import * as React from 'react';
import cx from 'classnames';
import { NavHashLink as Link } from 'react-router-hash-link';

import type { HTMLElementProps } from 'types';
import { LinkButton } from 'theme/components/button';
import { LimitWidth } from 'theme/components/layout';

import hiphipgo from './hiphipgo.png';
import yola from './yola.svg';
import styles from './PortfolioMenu.module.scss';

export default function PortfolioMenu(props: HTMLElementProps) {
  const { className, ...containerProps } = props;
  const mergedClassName = cx(styles.container, className);

  return (
    <nav className={mergedClassName} {...containerProps}>
      <LimitWidth>
        <div className={styles.content}>
          <Link to="#hhg" smooth>
            <img
              src={hiphipgo}
              alt="HipHipGo"
              className={styles.hhgLogo}
            />
          </Link>
          <Link to="#yola" smooth>
            <img
              src={yola}
              className={styles.yolaLogo}
              alt="Yola"
            />
          </Link>
          <Link to="#open_source" smooth className={styles.openSourceLogo}>
            Open Source
          </Link>
          <div className={styles.resume}>
            <LinkButton to="/resume/" smooth>
              Resume
            </LinkButton>
          </div>
        </div>
      </LimitWidth>
    </nav>
  );
}
