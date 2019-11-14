// @flow
import * as React from 'react';
import cx from 'classnames';
import { NavHashLink as Link } from 'react-router-hash-link';

import type { HTMLElementProps } from 'types';
import { LinkButton } from 'theme/components/button';
import { Columns, LimitWidth } from 'theme/components/layout';

import styles from './PortfolioMenu.module.scss';

export default function PortfolioMenu(props: HTMLElementProps) {
  const { className, ...containerProps } = props;
  const mergedClassName = cx(styles.container, className);

  return (
    <nav className={mergedClassName} {...containerProps}>
      <LimitWidth>
        <Columns>
          <Link to="#hhg" smooth>
            <img
              src={require('./hiphipgo.png')}
              alt="HipHipGo"
              className={styles.hhgLogo}
            />
          </Link>
          <Link to="#yola" smooth>
            <img
              src={require('./yola.svg')}
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
        </Columns>
      </LimitWidth>
    </nav>
  );
}
