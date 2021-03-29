// @flow
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSitemap,
  faServer,
  faGlobeAmericas,
  faUsers,
  faPuzzlePiece,
  faCodeBranch,
  faLanguage,
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { Columns } from 'theme/components/layout';

import YolaDemo from './yolademo';

import styles from './YolaDescription.module.scss';

function popInProps(placemennt: number) {
  return {
    'data-aos': 'zoom-out-down',
    'data-aos-anchor': '#yola-stats',
    'data-aos-duration': 750,
    'data-aos-delay': 150 * placemennt,
    'data-aos-once': 'true'
  };
}

export default function YolaDescription() {
  return (
    <section id="yola" className={styles.container}>
      <div className={styles.demoContainer}>
        <YolaDemo className={styles.demo} />
        <div
          className={styles.content}
          data-aos="fade-left"
          data-aos-anchor="#yola"
          data-aos-anchor-placement="top-center"
          data-aos-duration={500}
          data-aos-once="true"
        >
          <div
            data-aos="flip-up"
            data-aos-anchor="#yola"
            data-aos-anchor-placement="top-center"
            data-aos-delay={250}
            data-aos-duration={500}
            data-aos-once="true"
          >
            <h2>Org Builder</h2>
            <FontAwesomeIcon icon={faSitemap} style={{ color: '#FFE264' }} />
            <p>
              Reorganized a global engineering team of fullstack engineers into
              both distinct disciplines (clients, services, and infrastructure)
              and tactical product teams. Enabled the onboarding and retention
              of 40 additional engineers.
            </p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-anchor="#yola"
            data-aos-anchor-placement="top-center"
            data-aos-delay={500}
            data-aos-duration={500}
            data-aos-once="true"
          >
            <h2>Pragmatically Progressive</h2>
            <FontAwesomeIcon icon={faJsSquare} style={{ color: '#ABD439' }} />
            <p>
              Architected and executed a micro-frontend strategy for shipping
              new UIs with independent, modern stacks. Facilitated a transition
              from Django/server side rendered UIs to static, client-side
              rendering while simultaneously improving the org's ability to ship
              new features quickly.
            </p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-anchor="#yola"
            data-aos-anchor-placement="top-center"
            data-aos-delay={750}
            data-aos-duration={500}
            data-aos-once="true"
          >
            <h2>Outcome Oriented</h2>
            <FontAwesomeIcon icon={faServer} style={{ color: '#31A8FA' }} />
            <p>
              Led the design and rapid execution of new APIs for Yola's primary
              SaaS sitebuilder product, securing both a strategic partnership
              with Plesk and additional funding.
            </p>
          </div>
        </div>
      </div>
      <Columns className={styles.stats} id="yola-stats">
        <div {...popInProps(0)}>
          <FontAwesomeIcon
            icon={faNetworkWired}
            className={styles.microservices}
          />
          <h2>100+ microservices and frontends</h2>
          <p>
            Executed a microservice architecture at scale, radically improving
            performance and site reliability.
          </p>
        </div>
        <div {...popInProps(1)}>
          <FontAwesomeIcon
            icon={faPuzzlePiece}
            className={styles.installables}
          />
          <h2>100+ installables</h2>
          <p>
            Secured the adoption of code sharing via well tested, single-purpose
            installabes.
          </p>
        </div>
        <div {...popInProps(2)}>
          <FontAwesomeIcon icon={faUsers} className={styles.users} />
          <h2>13 million users</h2>
          <p>
            Shipped quality software on time and on budget while growing the
            user base from 6&nbsp;million to 13&nbsp;million.
          </p>
        </div>
        <div {...popInProps(3)}>
          <FontAwesomeIcon icon={faLanguage} className={styles.language} />
          <h2>8 currencies, 18 languages</h2>
          <p>
            Internationalized UI and purchase flows platform-wide rapidly,
            effectively, and consistently.
          </p>
        </div>
        <div {...popInProps(4)}>
          <FontAwesomeIcon icon={faCodeBranch} className={styles.code} />
          <h2>6,000+ pull requests per year</h2>
          <p>
            Designed and secured the adoption of a code review process, ensuring
            the quality of over 6,000 pull requests per year.
          </p>
        </div>
        <div {...popInProps(5)}>
          <FontAwesomeIcon icon={faGlobeAmericas} className={styles.globe} />
          <h2>Global Engineering</h2>
          <p>
            Architected a multinational engineering org with teams in Ukraine,
            South Africa, and across the United States.
          </p>
        </div>
      </Columns>
    </section>
  );
}
