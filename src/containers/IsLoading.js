import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/UserActions';
import Loading from '../components/Loading';

class IsLoading extends Component {

  componentWillMount() {
    const { userLoading } = this.props;

    if(userLoading === undefined) {
      this.props.getUser();
    }
  }

  render(){
    const { userLoading, children } = this.props;
    if ((!userLoading) || (this.props.user === null)) {
      return(
        <div>
          {children}
        </div>
      );
    } else {
      return (
        <Loading />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { getUser })(IsLoading));