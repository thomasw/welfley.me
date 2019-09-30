// @flow
import type { Dispatch, GetState } from 'reducer';

type SetNoticeAction = {|
  type: 'NOTICE/SET_NOTICE',
  notice: string
|};

type ClearNoticeAction = {|
  type: 'NOTICE/CLEAR_NOTICE'
|};

export function setNotice(notice: string): SetNoticeAction {
  return {
    type: 'NOTICE/SET_NOTICE',
    notice
  };
}

export function clearNotice(): ClearNoticeAction {
  return {
    type: 'NOTICE/CLEAR_NOTICE'
  };
}

export function setExpiringNotice(notice: string, timeout: number = 3500) {
  return async (dispatch: Dispatch, getState: GetState) => {
    await dispatch(setNotice(notice));

    const clearNoticeIfStillSet = () => {
      const state = getState();
      const currentNotice = state.notices.notice;

      if (currentNotice === notice) {
        dispatch(clearNotice());
      }
    };

    setTimeout(clearNoticeIfStillSet, timeout);
  };
}

export type Action = SetNoticeAction | ClearNoticeAction;
