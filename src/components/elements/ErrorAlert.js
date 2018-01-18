import React from 'react';
import './erroralert.css';

const ErrorAlert = (props) => {
  return (
    <div className="alert" role="alert">
      {props.children}
    </div>
  )
}

export default ErrorAlert;