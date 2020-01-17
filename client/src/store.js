import { applyMiddleware, createStore, combineReducers } from 'redux';
import { localStorageMiddleware, promiseMiddleware } from './middleware';
import auth from "./reducers/auth";
import community from "./reducers/community";
import common from "./reducers/common";
import post from "./reducers/post";


const reducer = combineReducers({
  auth,
  common,
  community,
  post
});

const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware);

const store = createStore(reducer, middleware);

export default store;