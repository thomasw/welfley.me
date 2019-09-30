// @flow
import React from 'react';
import { hydrate, render } from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from 'App';

const root = document.getElementById('root');

smoothscroll.polyfill();
AOS.init();

root && (root.hasChildNodes() ? hydrate(<App />, root) : render(<App />, root));
