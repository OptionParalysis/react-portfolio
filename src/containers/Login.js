import React, { Component } from "react";
import firebase from 'firebase';
import InputField from "../components/form/inputField";
import LoginButtons from "../components/elements/LoginButtons";
import { login, getUser, googleLogin } from "../actions/UserActions";
import { connect } from "react-redux";
import ErrorAlert from '../components/elements/ErrorAlert';
import SocialLoginBtns from "../components/elements/SocialLoginBtns";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      email: "",
      password: ""
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email !== undefined || this.props.user.email !== undefined) {
      this.props.history.push('/portal');
    }
  }

  submitLogin(event) {
    event.preventDefault();
    console.log('submit')
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      });
    });
  }

  render() {

    const errStyle = {
      borderColor: '#b56969'
    }

    return (
      <div className="one-col-center">
        <h1 className="page-title">Login</h1>
        <form
          className="contact-form"
          onSubmit={event => { this.submitLogin(event)}}
        >
          <InputField
            id="email"
            type="text"
            inputAction={event => this.setState({ email: event.target.value })}
            label="Email"
            style={this.state.error ? errStyle : null}
          />
          <InputField
            id="password"
            type="password"
            label="Password"
            inputAction={event => this.setState({ password: event.target.value })}
            style={this.state.error ? errStyle : null}
          />

          {this.state.error && <ErrorAlert>Your username/password is incorrect.</ErrorAlert>}

          <LoginButtons
            submitLabel="Login"
            otherLabel="Create Account"
            goToLink="/create-account"
            {...this.props}
          />

          <SocialLoginBtns {...this.props} />

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { login, getUser, googleLogin })(Login);
