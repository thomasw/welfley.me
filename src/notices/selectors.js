// @flow
import { type State } from 'reducer';

export function getNotice(state: State) {
  return state.notices.notice;
}
