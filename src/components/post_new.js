import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../actions";

class PostNew extends Component {

  formField = field => {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "text-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text" {...field.input}
          autoComplete="off"
        />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }


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
          component={this.formField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.formField}
        />
        <Field
          label="Content"
          name="content"
          component={this.formField}
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
