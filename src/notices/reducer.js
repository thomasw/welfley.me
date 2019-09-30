// @flow
import type { Action } from './actions';

export type State = {|
  +notice?: string
|};

const INITIAL_STATE: State = {
  notice: undefined
};

function setNotice(state, notice) {
  return { ...state, notice };
}

function clearNotice(state) {
  return { ...state, notice: undefined };
}

export function reducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case 'NOTICE/SET_NOTICE':
      return setNotice(state, action.notice);
    case 'NOTICE/CLEAR_NOTICE':
      return clearNotice(state);
    default:
      return state;
  }
}
