import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware } from './middleware';
import auth from "./reducers/auth";
import community from "./reducers/community";
import common from "./reducers/common";


const reducer = combineReducers({
  auth,
  common,
  community
});

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;