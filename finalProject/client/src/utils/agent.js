'use strict';

import _superagent from "superagent";
import superagentPromise from "superagent-promise";

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:3000/api';
const responseBody = res => res.body;


let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
}
  

const requests = {
    get: url =>
        superagent
            .get(`${API_ROOT}${url}`)
            .use(tokenPlugin)
            .then(responseBody),
    post: (url, body) =>
        superagent
            .post(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .then(responseBody)
  };

const Posts = {
    all: page => 
        requests.get(`/posts/`),
    create: post =>
        requests.post('/posts/', { post })
};

const Auth = {
    current: () =>
      requests.get('/user'),
    login: (email, password) =>
      requests.post('/users/login', { user: { email, password } }),
    register: (username, email, password) =>
        requests.post('/users', { user: { username, email, password } })
  };

export default {
    Posts,
    Auth,
    setToken: _token => { token = _token; }
};
