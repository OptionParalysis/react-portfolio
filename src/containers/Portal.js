import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/UserActions';

class Portal extends Component {

  render(){
    return(
      <div>
        Shortly I will be displaying independent projects I've been working on.  Stay tuned!
      </div>
    );
  }
}

export default connect((state, ownProps) => ({
  user: state.user
}), { getUser })(Portal);