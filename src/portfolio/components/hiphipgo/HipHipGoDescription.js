// @flow
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faMobileAlt,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Columns } from 'theme/components/layout';
import BackgroundFader, { type ColorOption } from './BackgroundFader';
import HHGDemo from './hhgdemo';

import styles from './HipHipGoDescription.module.scss';

const START_DELAY = 1000;
const STEP_DELAY = 200;
const TRANSITION = 'fade-left';

export default function HipHipGoDescription() {
  const [color, setColor] = useState<ColorOption>(BackgroundFader.neutral);

  return (
    <>
      <div className={styles.intro}>
        <h1 id="hhg">HipHipGo</h1>
        <p>Founder and Lead Engineer</p>
        <p>
          Your weight before you weigh it. Forecasts based on where you go, how
          you get there, and what you spend.
        </p>
        <p>
          <a href="https://www.hiphipgo.com/">
            See it in action <FontAwesomeIcon icon={faArrowRight} fixedWidth />
          </a>
        </p>
      </div>
      <Columns>
        <ul className={styles.content}>
          <li
            data-aos={TRANSITION}
            data-aos-anchor="#hhg"
            data-aos-duration={1000}
            data-aos-delay={START_DELAY}
            data-aos-once
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faMobileAlt} />
              <BackgroundFader color={color} />
            </div>
            <p>
              <strong>React Native</strong> apps for iOS and
              Android&mdash;weight change forecasting, place search with health
              impact predictions, and a food spend/activity timeline.
            </p>
          </li>
          <li
            data-aos={TRANSITION}
            data-aos-anchor="#hhg"
            data-aos-duration={1000}
            data-aos-delay={START_DELAY + STEP_DELAY * 1}
            data-aos-once
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faHeart} />
              <BackgroundFader color={color} />
            </div>
            <p>
              Restaurant weight impact scoring based on aggregate customer
              activity levels, weight data, and food spending.
            </p>
          </li>
          <li
            data-aos={TRANSITION}
            data-aos-anchor="#hhg"
            data-aos-duration={1000}
            data-aos-delay={START_DELAY + STEP_DELAY * 2}
            data-aos-once
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <BackgroundFader color={color} />
            </div>
            <p>
              Transaction geolocation based on automatically imported bank data,
              mobile device location tracking, and user profile cues.
            </p>
          </li>
        </ul>
        <div className={styles.demo}>
          <HHGDemo onColorChange={setColor} />
        </div>
      </Columns>
    </>
  );
}
