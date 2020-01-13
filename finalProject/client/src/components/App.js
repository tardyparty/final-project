import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";

// pages
import Home from "../pages/home";
import Store from "../pages/store";
import Search from "../pages/search";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import Community from "../pages/community";
import Login from "../pages/login";
import Register from "../pages/register";

const config = {
  issuer: 'https://${dev-247700.okta.com}/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '{0oatqrgfAhMW0LGPX4x5}',
  pkce: true
}


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Security {...config}>
          <Route exact path="/" component={Home} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/register" component={Register} />
          </Security>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
