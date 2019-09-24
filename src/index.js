// @flow
import React from 'react';
import { hydrate, render } from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from 'App';
import * as serviceWorker from 'serviceWorker';

const root = document.getElementById('root');

smoothscroll.polyfill();
AOS.init();

root && (root.hasChildNodes() ? hydrate(<App />, root) : render(<App />, root));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
