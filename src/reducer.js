// @flow
import { combineReducers } from 'redux';

import { noticeReducer, type NoticeAction, type NoticeState } from 'notices';

export type Action = NoticeAction;
export type State = {|
  +notices: NoticeState
|};

const reducer = combineReducers<State, Action>({
  notices: noticeReducer
});

export { reducer };
