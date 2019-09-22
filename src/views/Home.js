// @flow
import React from 'react';
import Header from '../theme/components/Header';
import SocialBar from '../theme/components/SocialBar';
import ContactSection from '../contact/components/ContactSection';

export default function Home() {
  return (
    <React.Fragment>
      <Header transitionAnchor="#contact-me">
        <h1>Thomas Welfley</h1>
        <p>
          I build <strong>engineering teams</strong> and{' '}
          <strong>software</strong>. Whatever I build next will be better than
          anything I've built before.
        </p>
        <SocialBar />
      </Header>
      <ContactSection />
    </React.Fragment>
  );
}
