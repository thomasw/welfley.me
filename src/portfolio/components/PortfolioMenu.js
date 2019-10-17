// @flow
import * as React from 'react';
import cx from 'classnames';
import { NavHashLink as Link } from 'react-router-hash-link';

import { LinkButton } from 'theme/components/button';
import { Columns, LimitWidth } from 'theme/components/layout';

import styles from './PortfolioMenu.module.scss';

type Props = { className?: string };

export default function CurvedBottomSection(props: Props) {
  const { className, ...containerProps } = props;
  const mergedClassName = cx(styles.container, className);

  return (
    <nav className={mergedClassName} {...containerProps}>
      <LimitWidth>
        <Columns>
          <Link
            to="#hhg"
            smooth
            data-aos="fade-right"
            data-aos-anchor="#portfolio"
            data-aos-duration={1000}
          >
            <img
              src={require('./hiphipgo.png')}
              alt="HipHipGo"
              className={styles.hhgLogo}
            />
          </Link>
          <Link
            to="#yola"
            smooth
            data-aos="fade-right"
            data-aos-anchor="#portfolio"
            data-aos-duration={1000}
            data-aos-delay={250}
          >
            <img
              src={require('./yola.svg')}
              className={styles.yolaLogo}
              alt="Yola"
            />
          </Link>
          <Link
            to="#open_source"
            smooth
            className={styles.openSourceLogo}
            data-aos="fade-right"
            data-aos-anchor="#portfolio"
            data-aos-duration={1000}
            data-aos-delay={500}
          >
            Open Source
          </Link>
          <div
            className={styles.resume}
            data-aos="fade-right"
            data-aos-anchor="#portfolio"
            data-aos-duration={1000}
            data-aos-delay={750}
          >
            <LinkButton
              to="/resume/"
              smooth
              style={{ display: 'inline-block' }}
            >
              Resume
            </LinkButton>
          </div>
        </Columns>
      </LimitWidth>
    </nav>
  );
}
