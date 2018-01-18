import React, { Component } from 'react';
import InputField from '../components/form/inputField';
import LoginButtons from '../components/elements/LoginButtons';
import { createAccount } from '../actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../components/elements/ErrorAlert';

class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  isValid() {
    const { email, password, confirmPassword } = this.state;

    if (email === '' || password === '' || confirmPassword === '') {
      this.setState({
        error: 'Please enter in all fields'
      });
      return false;
    }

    if (password !== confirmPassword) {
      this.setState({
        error: 'Please make sure your passwords match'
      });
      return false;
    }

    return true;
  }

  submitAccount(event) {
    event.preventDefault();
    if (!this.isValid()) {
      return;
    }
    this.props.createAccount(this.state.email, this.state.password).then(() => {
      this.props.history.replace('/portal');
    }).catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  render() {

    const errStyle = {
      borderColor: '#b56969'
    }

    return (
      <div className="one-col-center">
        <h1 className="page-title">Signup</h1>
        <form className="contact-form" onSubmit={(event) => this.submitAccount(event)}>

          <InputField
            id="email"
            type="text"
            label="Email"
            inputAction={(event) => this.setState({ email: event.target.value })}
            style={this.state.error ? errStyle : null}
          />
          <InputField
            id="password"
            type="password"
            label="Password"
            inputAction={(event) => this.setState({ password: event.target.value })}
            style={this.state.error ? errStyle : null}
          />
          <InputField
            id="confirm-password" 
            type="password" 
            label="Confirm Password"
            inputAction={(event) => this.setState({ confirmPassword: event.target.value })}
            style={this.state.error ? errStyle : null}
          />
          {this.state.error && <ErrorAlert>
            {this.state.error}
          </ErrorAlert>}

          <LoginButtons 
            submitLabel="Create account" 
            otherLabel="Go back" 
            goToLink="/login" 
            {...this.props} 
          />

        </form>
      </div>
    )
  }
}

export default connect(null, { createAccount })(CreateAccount);