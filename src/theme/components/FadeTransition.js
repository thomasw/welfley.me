// @flow
import * as React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './FadeTransition.module.scss';

type Props = {
  children: React.Node,
  sceneId: any
};

export default function NoticeManager(props: Props) {
  const { children, sceneId, ...transitionProps } = props;

  return (
    <TransitionGroup>
      <CSSTransition
        key={sceneId}
        classNames={styles}
        timeout={500}
        // $FlowFixMe - CSSTransition is untyped.
        {...transitionProps}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}
