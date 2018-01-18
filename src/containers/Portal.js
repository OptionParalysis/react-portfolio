import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/UserActions';

class Portal extends Component {

  componentWillMount() {
    this.props.getUser();

    if(this.props.user.loading === false && this.props.user.email === undefined) {
      this.props.history.replace('/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.loading === false && nextProps.user.email === undefined) {
      this.props.history.replace('/login');
    }
  }

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