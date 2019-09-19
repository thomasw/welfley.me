// @flow
import React from 'react';

import Overlay from './Overlay';
import FullHeight from './FullHeight';

import styles from './Header.module.scss';

const TRANSITION_DURATION = 2500;

export default function Header() {
  return (
    <header>
      <FullHeight className={styles.content}>
        <Overlay
          className={styles.backdrop}
          data-aos="transition-out-zoom"
          data-aos-anchor="#content"
          data-aos-duration={TRANSITION_DURATION}
        />
        <Overlay
          className={styles.blur}
          data-aos="transition-out-fade"
          data-aos-anchor="#content"
          data-aos-duration={TRANSITION_DURATION}
        />
        <div
          className={styles.copy}
          data-aos="transition-out-fade"
          data-aos-anchor="#content"
          data-aos-duration={TRANSITION_DURATION}
        >
          <h1>Thomas Welfley</h1>
          <p>
            I build <strong>engineering teams</strong> and{' '}
            <strong>software</strong>. Whatever I build next will be better than
            anything I've built before.
          </p>
        </div>
      </FullHeight>
    </header>
  );
}
