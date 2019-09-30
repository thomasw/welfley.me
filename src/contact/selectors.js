// @flow
import { isLoading, hasError } from 'redux-thunk-monitor';
import type { State } from 'reducer';

export function isSendingMessage(state: State) {
  return isLoading(state, 'sendMessage');
}

export function didSendingMessageFail(state: State) {
  return hasError(state, 'sendMessage');
}
