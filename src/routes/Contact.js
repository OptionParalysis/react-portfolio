import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './contact.css';

class Contact extends Component {
  endpoint = 'https://your-project.cloudfunctions.net/httpEmail';

  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-error text-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={field.label}>{field.label}
          <input
            className="form-control"
            id={field.label}
            autoComplete={field.label}
            {...field.input}
          />
        </label>
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  renderTextArea(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-error text-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={field.label}>{field.label}
          <textarea
            className="form-control"
            id={field.label}
            autoComplete={field.label}
            {...field.input}
          />
        </label>
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="one-col-center">
        <h1 className="page-title">Contact</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="email"
            label="Your Email:"
            component={this.renderField}
          />
          <Field
            name="subject"
            label="Subject:"
            component={this.renderField}
          />
          <Field
            name="body"
            label="Body:"
            component={this.renderTextArea}
          />
          <button
            type="submit"
            className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  // validate the inputs from 'values'
  if (!values.email) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.subject) {
    errors.subject = 'Enter a title for the email.'
  }
  if (!values.body) {
    errors.body = 'Enter a message for the email.'
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'ContactForm'
})(Contact);