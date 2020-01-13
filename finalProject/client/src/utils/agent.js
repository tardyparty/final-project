import _superagent from "superagent";
import superagentPromise from "superagent-promise";


const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000/api';

const responseBody = res => res.body;

const requests = {
    get: url => 
        superagent.get(`${API_ROOT}${url}`)
            .then( responseBody )
};

const Posts = {
    all: page => 
        requests.get(`/posts`)
};

export default {
    Posts
};
