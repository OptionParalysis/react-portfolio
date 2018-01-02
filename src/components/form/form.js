import React, { Component } from 'react';

export default class Form extends Component {

    state = {
        firstName: '',
        email: '',
        emailError: '',
        body: ''
    };

    change = (e) => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validate = () => {
        let isError = false;
        const errors = {};

        if (this.state.email.length < 5) {
            isError = true;
            errors.emailError = 'Email needs to be at least 5 char long';
        }

        if (isError) {
            this.setState({
                ...this.state,
                ...errors
            });
        }

        return isError;
    }

    onSubmit = (e) => {
        e.preventDefault();
        // check for errors
        const err = this.validate();

        if(!err) {
            // clear form
            this.setState({
                firstName: '',
                email: '',
                body: ''
            });
            this.props.onChange({
                firstName: '',
                email: '',
                body: ''
            });
        }
    }

    render(){
        return(
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input 
                        name="firstName"
                        value={this.state.firstName} 
                        placeholder="First name" 
                        className="form-control"
                        onChange={e => this.change(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input 
                        name="email"
                        value={this.state.email}
                        placeholder="Email" 
                        className="form-control"
                        required
                        onChange={e => this.change(e)} />
                        {this.state.emailError.length > 5 && 
                            <p 
                                className="alert alert-danger" 
                                role="alert">{this.state.emailError}</p>
                        }
                </div>
                <div className="form-group">
                    <label htmlFor="Message">Message</label>
                    <textarea 
                        name="body"
                        value={this.state.body} 
                        placeholder="Message" 
                        className="form-control"
                        onChange={e => this.change(e)}>
                    </textarea>
                </div>
                <button 
                onClick={e => this.onSubmit(e)}
                className="btn btn-primary">Submit</button>
            </form>
        );
    }
}