// @flow
import { sendEmailNotice, type EmailNotice } from 'api-client';
import { monitorThunk } from 'redux-thunk-monitor';

import type { Dispatch } from 'reducer';
import { setExpiringNotice } from 'notices';

export function sendMessage(message: EmailNotice) {
  async function sendMessageAsync(dispatch: Dispatch) {
    await sendEmailNotice(message);
    dispatch(setExpiringNotice('Your message is on its way!'));
  }

  monitorThunk(sendMessageAsync, 'sendMessage');

  return sendMessageAsync;
}
