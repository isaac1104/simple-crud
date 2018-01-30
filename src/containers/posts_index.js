import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    if (this.props.posts[0]) {
      return this.props.posts[0].map(post => {
        return (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        );
      });
    } else {
      return (
        <h3>Loading...</h3>
      );
    }
  }

  render() {

    return (
      <div>
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">Add New Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, actions)(PostsIndex);
