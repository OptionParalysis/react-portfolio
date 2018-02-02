import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/UserActions';

class Portal extends Component {

  render(){
    return(
      <div>
        Portal
      </div>
    );
  }
}

export default connect((state, ownProps) => ({
  user: state.user
}), { getUser })(Portal);