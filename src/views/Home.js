// @flow
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Header from 'theme/components/Header';
import SocialBar from 'theme/components/SocialBar';
import Footer from 'theme/components/Footer';
import { Columns } from 'theme/components/layout';
import { LinkButton } from 'theme/components/button';

import ContactSection from 'contact/components/ContactSection';
import PortfolioSection from 'portfolio/components/PortfolioSection';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Thomas Welfley: Portfolio</title>
        <meta
          name="description"
          content="Thomas Welfley is a San Franciso based engineering leader that builds amazing teams and software."
        />
        <meta
          name="keywords"
          content="engineer, software engineer, python developer, developer, web developer, engineering manager, vice president, CTO, director, San Francisco, California, Welfley, Thomas, portfolio, resume"
        />
      </Helmet>
      <Header transitionAnchor="#portfolio_content">
        <h1>Thomas Welfley</h1>
        <p>
          I build <strong>engineering teams</strong> and{' '}
          <strong>software</strong>. Whatever I build next will be better than
          anything I've built before.
        </p>
        <Columns className={styles.cta_columns}>
          <div>
            <LinkButton to="#portfolio" smooth className={styles.primary_cta}>
              Portfolio
            </LinkButton>
          </div>
          <SocialBar />
        </Columns>
      </Header>
      <main>
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
