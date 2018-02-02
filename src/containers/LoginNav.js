import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/UserActions';
import './loginNav.css';

class LoginNav extends Component {
  
  componentWillMount() {
    this.props.getUser();
  }

  // componentWillReceiveProps(nextProps) {
  //   const lout = document.getElementById('logout-link');
  //   const lin = document.getElementById('login-link');

  //   if (nextProps.user.email !== undefined || this.props.user.email !== undefined) {
  //     lin.style.display = 'none';
  //     lout.style.display = 'block';
  //   } else {
  //     lout.style.display = 'none';
  //     lin.style.display = 'block';
  //   }
  // }

  render() {
    return (
      <nav className="login-links">
        <ul>
          <li>
            <button id="logout-link" onClick={() => {this.props.logout()}}>
              Logout
            </button>

            <Link id="login-link" to="/login">
              Register/Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { getUser, logout })(LoginNav);