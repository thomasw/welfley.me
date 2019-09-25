// @flow
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const compose = composeWithDevTools({});

export default function makeStore() {
  return createStore(reducer, compose(applyMiddleware(thunk)));
}
