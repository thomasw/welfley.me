// @flow
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Header from 'theme/components/Header';
import SocialBar from 'theme/components/SocialBar';
import ContactSection from 'contact/components/ContactSection';
import Footer from 'theme/components/Footer';
import Columns from 'theme/components/Columns';
import LinkButton from 'theme/components/LinkButton';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Thomas Welfley: Portfolio</title>
        <meta
          name="description"
          content="Thomas Welfley is a San Franciso based engineering manager that builds amazing teams and software."
        />
        <meta
          name="keywords"
          content="engineer, software engineer, python developer, developer, web developer, engineering manager, San Francisco, California, Welfley, Thomas, portfolio, resume"
        />
      </Helmet>
      <Header transitionAnchor="#contact-me">
        <h1>Thomas Welfley</h1>
        <p>
          I build <strong>engineering teams</strong> and{' '}
          <strong>software</strong>. Whatever I build next will be better than
          anything I've built before.
        </p>
        <Columns className={styles.cta_columns}>
          <div>
            <LinkButton to="/resume" className={styles.primary_cta}>
              Resume
            </LinkButton>
          </div>
          <SocialBar />
        </Columns>
      </Header>
      <main>
        <ContactSection />
      </main>
      <Footer />
    </React.Fragment>
  );
}
