// @flow
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faServer } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';

import YolaDemo from './yolademo';

import styles from './YolaDescription.module.scss';

export default function YolaDescription() {
  return (
    <section id="yola" className={styles.container}>
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
            and tactical product teams. Enabled the onboarding and retention of
            40 additional engineers.
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
            Architected and executed a micro-frontend strategy for shipping new
            UIs with independent, modern stacks. Facilitated a transition from
            Django/server side rendered UIs to static, client-side rendering
            while simultaneously improving the org's ability to ship new
            features quickly.
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
            SaaS sitebuilder product, securing both a strategic partnership with
            Plesk and additional funding.
          </p>
        </div>
      </div>
    </section>
  );
}
