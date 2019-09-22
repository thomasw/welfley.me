// @flow
import * as React from 'react';

import Columns from 'theme/components/Columns';
import ContactForm from 'contact/components/ContactForm';

import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section id="contact-me" className={styles.container}>
      <Columns>
        <div>
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            venenatis mollis feugiat. Proin vulputate tincidunt volutpat. Nam
            vitae quam eget urna iaculis dignissim vel sit amet augue. In
            ultrices in mauris ut blandit. Aenean et erat mi. Praesent vitae
            elit sodales, tincidunt quam at, aliquam eros. Donec aliquam, nisl
            id congue bibendum, ex lorem maximus leo, eu ultricies leo nibh quis
            eros. Pellentesque in mauris erat. Suspendisse aliquam, libero et
            laoreet pharetra, nisl arcu mattis tellus, ut auctor est felis quis
            quam. Etiam ligula magna, congue at urna sit amet, aliquet accumsan
            lorem. Nullam consectetur orci quis placerat fermentum. Phasellus
            consequat nunc ut turpis interdum viverra. Morbi semper felis augue,
            quis venenatis leo consectetur sed. Maecenas elementum sem ut justo
            imperdiet convallis. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <ContactForm />
      </Columns>
    </section>
  );
}
