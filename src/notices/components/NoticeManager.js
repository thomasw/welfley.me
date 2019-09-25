// @flow
import React from 'react';
import { connect } from 'react-redux';

import type { State } from 'reducer';
import { Overlay } from 'theme/components/layout';

import { clearNotice } from '../actions';
import { getNotice } from '../selectors';

import styles from './NoticeManager.module.scss';

type MappedProps = {|
  notice?: string
|};

type MappedActions = {|
  clearNotice: () => Promise<null>
|};

type Props = {|
  ...MappedProps,
  ...MappedActions
|};

function NoticeManager({ notice, clearNotice }: Props) {
  if (!notice) return null;

  return (
    <Overlay className={styles.container} onClick={clearNotice}>
      <h1>{notice}</h1>
    </Overlay>
  );
}

function stateToProps(state: State): MappedProps {
  return {
    notice: getNotice(state.notices)
  };
}

export default connect(
  stateToProps,
  { clearNotice }
)(NoticeManager);
