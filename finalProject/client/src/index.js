import App from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

const defaultState = {
  appName: 'community',
  posts: null
};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'COMMUNITY_LOADED':
      return { ...state, posts: action.payload.posts };
  }
  return state;
};
const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
