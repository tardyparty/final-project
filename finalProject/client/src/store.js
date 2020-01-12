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

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;