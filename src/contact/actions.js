// @flow
import { monitorThunk } from 'redux-thunk-monitor';

import type { Dispatch } from 'reducer';
import { setExpiringNotice } from 'notices';

function wait() {
  return new Promise(r => setTimeout(r, 1000));
}

export function sendMessage(name: string, email: string, message: string) {
  async function sendMessageAsync(dispatch: Dispatch) {
    //TODO: Replace with real implementation.
    await wait();
    dispatch(setExpiringNotice('Your message is on its way!'));
  }

  monitorThunk(sendMessageAsync, 'sendMessage');

  return sendMessageAsync;
}
