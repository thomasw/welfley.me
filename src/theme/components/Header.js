// @flow
import React from 'react';

import FullHeight from './FullHeight';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <FullHeight className={styles.content}>
        <h1>Thomas Welfley</h1>
        <p>
          <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
          elit. Vivamus aliquet est eget ligula aliquam.
        </p>
        <ul>
          <li>
            <a href="#App">Primary CTA</a>
          </li>
          <li>
            <a href="#App">Secondary CTA</a>
          </li>
        </ul>
      </FullHeight>
    </header>
  );
}
