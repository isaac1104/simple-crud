import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostsIndex from "./../containers/posts_index";
import PostNew from "./post_new";
import PostsShow from "./../containers/posts_show";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/posts/new" component={PostNew}/>
          <Route path="/posts/:id" component={PostsShow}/>
          <Route path="/" component={PostsIndex}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
