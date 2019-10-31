import React from 'react';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Columns } from 'theme/components/layout';

import styles from './OpenSource.module.scss';

export default function OpenSource() {
  return (
    <section id="open_source" className={styles.container}>
      <h1>Open Source Projects</h1>
      <Columns className={styles.columns}>
        <article
          data-aos="slide-left"
          data-aos-anchor="#open_source"
          data-aos-duration={1000}
          data-aos-once
        >
          <a href="https://github.com/thomasw/djproxy/">
            <div className={styles.djproxyBg} />
            <div className={styles.content}>
              <div>
                <header>
                  <h1>djproxy</h1>
                  <h2>Python, Django, APIs, proxies, developer tools</h2>
                </header>
                <p>
                  djproxy is a class-based generic view reverse HTTP proxy for
                  Django. Implement proxy-dependent web apps and services
                  without worrying about your web server.
                </p>
              </div>
              <footer>
                <span>Source code</span>
                <FontAwesomeIcon icon={faCaretRight} fixedWidth />
              </footer>
            </div>
          </a>
        </article>
        <article className={styles.topOfStack}>
          <a href="https://github.com/thomasw/testtube/">
            <div className={styles.testtubeBg} />
            <div className={styles.content}>
              <div>
                <header>
                  <h1>testtube</h1>
                  <h2>Python, automation, developer tools, testing</h2>
                </header>
                <p>
                  Spare your alt and tab keys by automatically running your
                  project's test suite whenever files change. Specify which
                  commands to run and let testtube take care of the rest.
                </p>
              </div>
              <footer>
                <span>Source code</span>
                <FontAwesomeIcon icon={faCaretRight} fixedWidth />
              </footer>
            </div>
          </a>
        </article>
        <article
          data-aos="slide-right"
          data-aos-anchor="#open_source"
          data-aos-duration={1000}
          data-aos-once
        >
          <a href="https://github.com/thomasw/redux-thunk-monitor/">
            <div className={styles.reduxThunkMonitorBg} />
            <div className={styles.content}>
              <div>
                <header>
                  <h1>redux-thunk-monitor</h1>
                  <h2>JavaScript, React, Redux, Redux Thunk</h2>
                </header>
                <p>
                  Automatically record redux-thunk loading and error disposition
                  in your application state. Dispatch actions from your
                  components without writing logic to manage loading states.
                </p>
              </div>
              <footer>
                <span>Source code</span>
                <FontAwesomeIcon icon={faCaretRight} fixedWidth />
              </footer>
            </div>
          </a>
        </article>
      </Columns>
    </section>
  );
}
