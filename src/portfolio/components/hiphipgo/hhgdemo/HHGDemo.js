// @flow
import React, { useState, useEffect, useRef } from 'react';

import type { HTMLElementProps } from 'types';
import DeviceFrame from './DeviceFrame';
import timelinevideo from './timeline-small.mp4';
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

  // We let autoplay happen so that we ensure the video asset gets fully loaded
  // We don't want it to autoplay though, at least not until it has animated in
  // and it is fully loaded, so we pause it here.
  const handleCanPlay = () => {
    if (loaded && visible) return;

    video.current && video.current.pause();
  };

  useEffect(() => {
    window.document.addEventListener('aos:in:hhg', handleAnimateIn);

    // autoPlay sometimes doesn't trigger video playback because muted
    // isn't explicitly written to the dom. See
    // https://github.com/facebook/react/issues/10389 This is an attempt
    // to workaround that by ensuring that muted is enabled and then manually
    // triggering playback.
    if (video.current) {
      // TODO: The following line causes a warning in the test suite.
      // Warning: unstable_flushDiscreteUpdates: Cannot flush updates when
      // React is already rendering.
      // It conflicts with the muted attribute on the video tag itsself.
      video.current.muted = true;
      video.current.play().catch(() => {});
    }

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
        disableRemotePlayback
        loop
        muted
        onTimeUpdate={handleTimeUpdate}
        onCanPlay={handleCanPlay}
        onCanPlayThrough={handleCanPlayThrough}
        playsInline
        preload="auto"
        ref={video}
      >
        <source src={timelinevideo} type="video/mp4" />
      </video>
    </DeviceFrame>
  );
}
