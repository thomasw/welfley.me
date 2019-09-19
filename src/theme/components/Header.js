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
            <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
            elit. Vivamus aliquet est eget ligula aliquam.
          </p>
          <ul>
            <li>
              <a href="#content">Primary CTA</a>
            </li>
            <li>
              <a href="#App">Secondary CTA</a>
            </li>
          </ul>
        </div>
      </FullHeight>
    </header>
  );
}
