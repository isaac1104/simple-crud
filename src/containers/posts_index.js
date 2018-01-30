import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    if (this.props.posts) {
      return this.props.posts.map(post => {
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
    console.log(this.props.posts);
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
    posts: state.posts.data
  }
}

export default connect(mapStateToProps, actions)(PostsIndex);
