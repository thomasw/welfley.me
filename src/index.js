// @flow
import React from 'react';
import { hydrate, render } from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from 'App';
import { hasWebPSupport } from './featureDetection';

const root = document.getElementById('root');

!navigator.webdriver &&
  hasWebPSupport('lossless', (feature, result) => {
    document.body && document.body.classList.add(result ? 'webp' : 'no-webp');
  });
smoothscroll.polyfill();
AOS.init();

root && (root.hasChildNodes() ? hydrate(<App />, root) : render(<App />, root));
