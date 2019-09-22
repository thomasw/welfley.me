// @flow
import * as React from 'react';

import Input from 'theme/components/Input';
import TextBox from 'theme/components/TextBox';

export default function ContactForm() {
  return (
    <form>
      <Input
        type="text"
        id="name"
        name="name"
        autocomplete="name"
        required
        placeholder="Name"
        validated={false}
      />
      <Input
        type="email"
        id="email"
        name="email"
        autocomplete="email"
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
      <button>Send</button>
    </form>
  );
}
