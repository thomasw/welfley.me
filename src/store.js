// @flow
import { createStore } from 'redux';
import reducer from './reducer';

const INSTALL_DEV_TOOLS =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__;

export default function makeStore() {
  return createStore(
    reducer,
    INSTALL_DEV_TOOLS && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
