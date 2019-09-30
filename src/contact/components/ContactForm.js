// @flow
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import { Input, TextBox } from 'theme/components/input';
import { Button } from 'theme/components/button';

import { isSendingMessage } from '../selectors';
import { sendMessage } from '../actions';

import ContactErrorMessage from './ContactErrorMessage';
import styles from './ContactForm.module.scss';

const initialFormData = {
  name: '',
  email: '',
  message: ''
};

export default function ContactForm() {
  const [formData, setFormValues] = useState(initialFormData);
  const [showErrors, setShowErrors] = useState(false);
  const loading = useSelector(isSendingMessage);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ sendMessage }, dispatch);

  const handleSubmit = event => {
    event.preventDefault();
    actions
      .sendMessage(formData)
      .then(resetForm)
      .catch(() => {});
  };

  const updateField = e => {
    setFormValues({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormValues(initialFormData);
    setShowErrors(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactErrorMessage />
      <Input
        type="text"
        id="name"
        disabled={loading}
        value={formData.name}
        onChange={updateField}
        name="name"
        autoComplete="name"
        required
        placeholder="Name"
        validated={showErrors}
      />
      <Input
        type="email"
        id="email"
        disabled={loading}
        name="email"
        value={formData.email}
        onChange={updateField}
        autoComplete="email"
        required
        placeholder="Email"
        validated={showErrors}
      />
      <TextBox
        rows={5}
        disabled={loading}
        required
        id="content"
        name="message"
        value={formData.message}
        onChange={updateField}
        validated={showErrors}
      />
      <div className={styles.cta}>
        <Button
          loading={loading}
          icon={faPaperPlane}
          iconLoadingClassName={styles.wobble}
          onClick={() => setShowErrors(true)}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
