// @flow
import React from 'react';
import { hydrate, render } from 'react-dom';
import * as Sentry from '@sentry/browser';
import smoothscroll from 'smoothscroll-polyfill';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from 'App';
import { hasWebPSupport } from './featureDetection';

const root = document.getElementById('root');
// $FlowFixMe
const isDriven = navigator.webdriver || false;
const isProduction = process.env.NODE_ENV === 'production';

isProduction &&
  Sentry.init({
    dsn: 'https://cfe35a9e688e4f4b83d3c1c5dcd9cc3b@sentry.io/1768567'
  });

!isDriven &&
  hasWebPSupport('lossless', (feature, result) => {
    document.body && document.body.classList.add(result ? 'webp' : 'no-webp');
  });

smoothscroll.polyfill();
AOS.init();

root && (root.hasChildNodes() ? hydrate(<App />, root) : render(<App />, root));
