// @flow
import { combineReducers } from 'redux';

import { noticeReducer, type NoticeAction, type NoticeState } from 'notices';

export type Action = NoticeAction;
export type State = {|
  +notices: NoticeState
|};

/* eslint-disable no-use-before-define */
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
/* eslint-enable no-use-before-define */

const reducer = combineReducers<State, Action>({
  notices: noticeReducer
});

export { reducer };
