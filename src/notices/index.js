// @flow
import {
  setExpiringNotice,
  setNotice,
  clearNotice,
  type Action as NoticeAction
} from './actions';
import NoticeManager from './components/NoticeManager';
import { reducer as noticeReducer, type State as NoticeState } from './reducer';

export type { NoticeState, NoticeAction };
export {
  setExpiringNotice,
  setNotice,
  clearNotice,
  noticeReducer,
  NoticeManager
};
