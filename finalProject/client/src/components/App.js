import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Store from "../pages/store";
import Search from "../pages/search";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import Community from "../pages/community";
import Login from "../pages/login";
import Register from "../pages/register";
import Store_Car from "../pages/store_car";
import Store_Couple from "../pages/store_couple";
import Store_Glam from "../pages/store_glam";
import Store_Solo from "../pages/store_solo";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/store_car" component={Store_Car} />
          <Route exact path="/store_couple" component={Store_Couple} />
          <Route exact path="/store_glam" component={Store_Glam} />
          <Route exact path="/store_solo" component={Store_Solo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
