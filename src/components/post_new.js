import React, { Component } from "react";
import formField from "./form_field";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../actions";

class PostNew extends Component {

  formSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          label="Title"
          name="title"
          component={formField}
        />
        <Field
          label="Categories"
          name="categories"
          component={formField}
        />
        <Field
          label="Content"
          name="content"
          component={formField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }
  return errors;
}
export default reduxForm({ form: "newPost", validate })(connect(null, actions)(PostNew));
