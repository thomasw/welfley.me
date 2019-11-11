// @flow
import * as React from 'react';

import { Overlay, FullHeight } from 'theme/components/layout';

import styles from './Header.module.scss';

type Props = {
  transitionAnchor?: string,
  transitionDuration?: number,
  children: React.Node
};

export default function Header(props: Props) {
  const { children, transitionAnchor, transitionDuration = 2500 } = props;

  return (
    <header>
      <FullHeight className={styles.content}>
        <Overlay
          className={styles.backdrop}
          data-aos={transitionAnchor ? 'transition-out-zoom' : undefined}
          data-aos-anchor={transitionAnchor}
          data-aos-duration={transitionDuration}
        />
        <Overlay
          className={styles.blur}
          data-aos={transitionAnchor ? 'transition-out-unblur' : undefined}
          data-aos-anchor={transitionAnchor}
          data-aos-duration={transitionDuration}
        />
        <div
          className={styles.copy}
          data-aos={transitionAnchor ? 'transition-out-fade' : undefined}
          data-aos-anchor={transitionAnchor}
          data-aos-duration={transitionDuration}
        >
          {children}
        </div>
      </FullHeight>
    </header>
  );
}
