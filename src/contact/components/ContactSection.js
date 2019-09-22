// @flow
import * as React from 'react';

import Columns from 'theme/components/Columns';
import ContactForm from 'contact/components/ContactForm';

import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section id="contact-me" className={styles.container}>
      <Columns>
        <div className={styles.content}>
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            venenatis mollis feugiat.
          </p>
        </div>
        <ContactForm className={styles.form} />
      </Columns>
    </section>
  );
}
