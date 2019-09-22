// @flow
import React from 'react';
import cx from 'classnames';

import { NavHashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import styles from './SocialBar.module.scss';

type Props = {
  className?: string
};

export default function SocialBar(props: Props) {
  return (
    <ul className={cx(styles.bar, props.className)}>
      <li>
        <Link to="/#contact-me" smooth title="Contact me">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </Link>
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
