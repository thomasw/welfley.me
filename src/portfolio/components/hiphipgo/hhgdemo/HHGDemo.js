// @flow
import React, { PureComponent } from 'react';

import DeviceFrame from './DeviceFrame';
import {
  neutral,
  negative,
  positive,
  type ColorOption
} from '../BackgroundFader';

type Props = {
  onColorChange?: (color: ColorOption) => any
};

type State = {
  color: string,
  loaded: boolean,
  visible: boolean
};

export default class HHGDemo extends PureComponent<Props, State> {
  static defaultProps = {
    onColorChange: () => {}
  };

  state = {
    color: neutral,
    loaded: false,
    visible: false
  };

  video = React.createRef<HTMLVideoElement>();

  componentDidMount() {
    window.document.addEventListener('aos:in:hhg', this.setVisible);
  }

  componentWillUnmount() {
    window.document.removeEventListener('aos:in:hhg', this.setVisible);
  }

  handleTimeUpdate = () => {
    if (!this.video.current) return;

    const currentTime = this.video.current.currentTime;

    if (currentTime <= 3.26) return this.handleColorChange(neutral);
    if (currentTime <= 17.365) return this.handleColorChange(positive);
    if (currentTime <= 24.229) return this.handleColorChange(negative);

    return this.handleColorChange(neutral);
  };

  handleColorChange = async (color: ColorOption) => {
    if (color === this.state.color) return;

    this.setState({ color });
    this.props.onColorChange && this.props.onColorChange(color);
  };

  // We enable autoplay on the video but then pause it as soon as it starts.
  // Mobile Safari refuses to render the video element if both autoPlay and
  // controls are disabled, so we trick it to allow us to delay playback as
  // defined this.start()
  handleCanPlay = () => this.video.current && this.video.current.pause();

  setLoaded = () => this.setState({ loaded: true }, this.start);

  setVisible = () => this.setState({ visible: true }, this.start);

  start = () => {
    const { loaded, visible } = this.state;

    loaded && visible && this.video.current && this.video.current.play();
  };

  render() {
    const { onColorChange, ...containerProps } = this.props;
    return (
      <DeviceFrame
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once
        data-aos-mirror={false}
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
          onCanPlay={this.handleCanPlay}
          onCanPlayThrough={this.setLoaded}
          onTimeUpdate={this.handleTimeUpdate}
          playsInline
          preload="auto"
          ref={this.video}
        >
          <source src={require('./timeline-small.mp4')} type="video/mp4" />
        </video>
      </DeviceFrame>
    );
  }
}
