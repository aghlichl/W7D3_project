import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store'
import * as utils from './util/api_util'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDom.render(<h1>Pokedex</h1>, rootEl);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
