// @flow
import * as React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import cx from 'classnames';

import { FlexColumns } from 'theme/components/layout';
import SocialBar from 'theme/components/SocialBar';

import styles from './Footer.module.scss';

type Props = {
  sticky?: boolean
};

export default function Footer(props: Props) {
  const { sticky = false } = props;
  const className = cx(styles.container, { [styles.sticky]: sticky });

  return (
    <footer id="footer" className={className}>
      <FlexColumns className={styles.columns}>
        <div className={styles.copyrightCol}>
          <p>&copy; 2019 Thomas Welfley.</p>
          <ul>
            <li>
              <Link to="/#root" smooth className={styles.pill}>
                Home
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/thomasw/welfley.me"
                className={styles.pill}
              >
                Source Code
              </a>
            </li>
            <li>
              <a
                href="https://github.com/thomasw/welfley.me/issues"
                className={styles.pill}
              >
                Report Issue
              </a>
            </li>
          </ul>
        </div>
        <SocialBar className={styles.socialBar} />
      </FlexColumns>
    </footer>
  );
}
