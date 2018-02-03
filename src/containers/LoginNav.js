import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/UserActions';
import './loginNav.css';

class LoginNav extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      auth: false
    };
  }

  componentWillMount() {
    if(this.props.user !== null) {
      this.setState ({
        auth: true
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      this.setState ({
        auth: true
      });
    }
  }

  render() {
    let lin;
    let lout;

    if(this.state.auth === true) {
      lin = '';
      lout = 
        <button id="logout-link" onClick={() => {this.props.logout()}}>
          Logout
        </button>;
    } else {
      lin = 
        <Link id="login-link" to="/login">
          Register/Login
        </Link>;
      lout = '';
    }
    return (
      <nav className="login-links">
        <ul>
          <li>
            {lin}
            {lout}
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