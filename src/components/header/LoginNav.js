import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUser, logout } from '../../actions/UserActions';

class LoginNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  render() {
    return (
      <nav className="login-links">
        <ul>
          <li>

              <button id="logout-link" onClick={() => {this.props.logout()}}>
                Logout
              </button>

              <Link id="logout-link" to="/login">
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