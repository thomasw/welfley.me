// @flow
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import styles from './SocialBar.module.scss';

export default function SocialBar() {
  return (
    <ul className={styles.bar}>
      <li>
        <a href="#contact-me" title="Contact me">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </a>
      </li>
      <li>
        <a href="https://github.com/thomasw" title="Github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/thomaswelfley/" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/thethomasw" title="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </ul>
  );
}
