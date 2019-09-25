// @flow
import * as React from 'react';

import { Columns } from 'theme/components/layout';
import ContactForm from 'contact/components/ContactForm';

import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section id="contact-me" className={styles.container}>
      <Columns>
        <div className={styles.content}>
          <h1>Contact Me</h1>
          <p>
            Are you building something big, complicated, and impressive? Let me
            know how I can help.
          </p>
        </div>
        <ContactForm className={styles.form} />
      </Columns>
    </section>
  );
}
