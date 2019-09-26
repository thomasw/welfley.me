// @flow
import { isLoading } from 'redux-thunk-monitor';
import type { State } from 'reducer';

export function isSendingMessage(state: State) {
  return isLoading(state, 'sendMessage');
}
