// @flow
import * as React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import cx from 'classnames';

import Columns from 'theme/components/Columns';
import SocialBar from 'theme/components/SocialBar';

import styles from './Footer.module.scss';

type Props = {
  sticky?: boolean
};

function NavigateHome() {
  return (
    <Link to="/" className={styles.pill}>
      Home
    </Link>
  );
}

function ScrollToTop() {
  return (
    <ScrollLink to="root" className={styles.pill} smooth duration={1000}>
      Home
    </ScrollLink>
  );
}

export default function Footer(props: Props) {
  const { sticky = false } = props;
  const className = cx(styles.container, { [styles.sticky]: sticky });

  return (
    <footer id="footer" className={className}>
      <Columns className={styles.columns}>
        <div className={styles.copyRightCol}>
          <p>&copy; 2019 Thomas Welfley.</p>
          <ul>
            <li>
              <Switch>
                <Route path="/" exact component={ScrollToTop} />
                <Route component={NavigateHome} />
              </Switch>
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
      </Columns>
    </footer>
  );
}
