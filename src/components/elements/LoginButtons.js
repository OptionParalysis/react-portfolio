import React from 'react';
import './loginbuttons.css';

const LoginButtons = (props) => {
  const { submitLabel, otherLabel, goToLink, history } = props;

  return (
    <div className="justify-content-between">
      <button
        type="submit"
        className="btn btn-primary"
      >{submitLabel}</button>
      <button
      onClick={() => {history.push(goToLink)}}
        type="button"
        className="btn btn-info"
      >{otherLabel}</button>
    </div>
  )
}

export default LoginButtons;