import React from 'react';
import './socialLoginBtns.css';

const SocialLoginBtns = (props) => {
  const { googleLogin } = props;

  return (
    <div className="justify-content-between">
      <button 
        className="btn btn-social btn-primary" 
        onClick={googleLogin}>
        <span className="fa fa-google"></span>
        Sign in with Google
      </button>
    </div>
  )
};

export default SocialLoginBtns;