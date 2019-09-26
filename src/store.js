// @flow
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import { thunkMonitor } from 'redux-thunk-monitor';
import { reducer } from './reducer';

const compose = composeWithDevTools({});
const middleware = [thunkMonitor, thunk];

export default function makeStore() {
  return createStore(reducer, compose(applyMiddleware(...middleware)));
}
