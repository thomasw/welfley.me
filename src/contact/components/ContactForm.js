// @flow
import * as React from 'react';

import { Input, TextBox } from 'theme/components/input';
import { Button } from 'theme/components/button';

import styles from './ContactForm.module.scss';

export default function ContactForm() {
  return (
    <form>
      <Input
        type="text"
        id="name"
        name="name"
        autoComplete="name"
        required
        placeholder="Name"
        validated={false}
      />
      <Input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
        required
        placeholder="Email"
        validated={false}
      />
      <TextBox
        rows={5}
        required
        id="content"
        name="content"
        validated={false}
      />
      <div className={styles.cta}>
        <Button>Send</Button>
      </div>
    </form>
  );
}
