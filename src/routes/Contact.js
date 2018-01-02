import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './contact.css';

class Contact extends Component {

    renderUserEmail(field) {
        return (
            <div className="form-group">
                <label htmlFor="email">Email
                <input
                    className="form-control"
                    id="email"
                    autoComplete="email"
                    {...field.input}
                />
                </label>
            </div>
        );
    }

    render() {
        return (
            <div className="one-col-center">
                <h1 className="page-title">Contact</h1>
                <form action="">
                    <Field
                        name="useremail"
                        component={this.renderUserEmail}
                    />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'ConactForm'
})(Contact);