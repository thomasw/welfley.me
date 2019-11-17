// @flow
import React, { useState, useEffect, useRef } from 'react';

import type { HTMLElementProps } from 'types';
import DeviceFrame from './DeviceFrame';
import {
  neutral,
  negative,
  positive,
  type ColorOption
} from '../BackgroundFader';

type Props = {|
  onColorChange?: (color: ColorOption) => any,
  ...HTMLElementProps
|};

export default function HHGDemo(props: Props) {
  const [color, setColor] = useState<ColorOption>(neutral);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const video = useRef<?HTMLVideoElement>(null);
  const { onColorChange, ...containerProps } = props;

  const handleTimeUpdate = () => {
    if (!video.current) return;

    const currentTime = video.current.currentTime;

    if (currentTime <= 3.26) return handleColorChange(neutral);
    if (currentTime <= 17.365) return handleColorChange(positive);
    if (currentTime <= 24.229) return handleColorChange(negative);

    return handleColorChange(neutral);
  };

  const handleColorChange = (newColor: ColorOption) => {
    if (color === newColor) return;

    setColor(newColor);
    onColorChange && onColorChange(newColor);
  };

  const start = () => {
    video.current && video.current.play();
  };

  const handleAnimateIn = () => setVisible(true);

  const handleCanPlayThrough = () => setLoaded(true);

  useEffect(() => {
    window.document.addEventListener('aos:in:hhg', handleAnimateIn);

    return () => {
      window.document.removeEventListener('aos:in:hhg', handleAnimateIn);
    };
  }, []);

  useEffect(() => {
    loaded && visible && start();
  }, [loaded, visible]);

  return (
    <DeviceFrame
      data-aos="fade-up"
      data-aos-duration={1500}
      data-aos-once="true"
      data-aos-id="hhg"
      {...containerProps}
    >
      <video
        aria-hidden
        autoPlay
        controls={false}
        disableremoteplayback="true"
        loop
        muted
        onTimeUpdate={handleTimeUpdate}
        onCanPlayThrough={handleCanPlayThrough}
        playsInline
        preload="auto"
        ref={video}
      >
        <source src={require('./timeline-small.mp4')} type="video/mp4" />
      </video>
    </DeviceFrame>
  );
}
