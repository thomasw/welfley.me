// @flow
import React from 'react';

import GitFieldSection from './GitFieldSection';
import CurvedBottomSection from './CurvedBottomSection';
import PortfolioMenu from './PortfolioMenu';
import HipHipGoDescription from './hiphipgo';
import YolaDescription from './yola';
import OpenSource from './opensource';

import styles from './PortfolioSection.module.scss';

export default function PortfolioSection() {
  return (
    <div id="portfolio" className={styles.container}>
      <PortfolioMenu />
      <section id="portfolio_content">
        <CurvedBottomSection>
          <HipHipGoDescription />
        </CurvedBottomSection>
        <GitFieldSection>
          <YolaDescription />
          <OpenSource />
        </GitFieldSection>
      </section>
    </div>
  );
}
