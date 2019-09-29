// @flow
import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import {
  faPhoneAlt,
  faGlobeAmericas,
  faHome,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import CircleIcon from './CircleIcon';

import styles from './ContactInfo.module.scss';

export default function Home() {
  return (
    <ul className={styles.container}>
      <li>
        <span>
          <CircleIcon icon={faPhoneAlt} />
        </span>
        <a href="tel:3219606107" className={styles.text}>
          (321) 960 - 6107
        </a>
      </li>
      <li>
        <span>
          <CircleIcon icon={faEnvelope} />
        </span>
        <Link
          to="/#contact-me"
          smooth
          title="Contact me"
          className={styles.text}
        >
          thomas@welfley.me
        </Link>
      </li>
      <li>
        <span>
          <CircleIcon icon={faHome} />
        </span>
        <span className={styles.text}>San Francisco, CA</span>
      </li>
      <li>
        <span>
          <CircleIcon icon={faGlobeAmericas} />
        </span>
        <Link to="/" className={styles.text}>
          https://welfley.me
        </Link>
      </li>
    </ul>
  );
}
