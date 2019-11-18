// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

window.HTMLVideoElement.prototype.play = () => {
  return new Promise(() => {});
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
