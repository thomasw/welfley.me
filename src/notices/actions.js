// @flow

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

export type Action = SetNoticeAction | ClearNoticeAction;
