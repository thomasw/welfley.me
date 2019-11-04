// @flow
import React from 'react';
import cx from 'classnames';

import styles from './BackgroundFader.module.scss';

export const neutral = '#00aeff';
export const negative = '#db4255';
export const positive = '#7ec783';

export type ColorOption = '#00aeff' | '#db4255' | '#7ec783';

type Props = {
  color: ColorOption,
  baseOverlayClassName?: string
};

function BackgroundFader(props: Props = { color: neutral }) {
  const { color, baseOverlayClassName } = props;

  return (
    <>
      <div key="base" className={cx(styles.bgOverlay, baseOverlayClassName)} />
      {BackgroundFader.colors.map(colorOpt => (
        <div
          key={colorOpt}
          style={{
            background: colorOpt,
            opacity: colorOpt === color ? 1.0 : 0
          }}
          className={styles.bgOverlay}
        />
      ))}
    </>
  );
}

BackgroundFader.colors = [neutral, negative, positive];
BackgroundFader.neutral = neutral;
BackgroundFader.positive = positive;
BackgroundFader.negative = negative;

export default BackgroundFader;
