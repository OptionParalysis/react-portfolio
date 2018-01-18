import React from 'react';

function isVowel(char) {
  return /^[aeiou]$/.test(char.toLowerCase());
}

const InputField = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}
        <input 
          id={props.id}
          type={props.type} 
          autoComplete={props.label} 
          placeholder={`Please enter ${isVowel(props.label[0]) ? 'an' : 'a'} ${props.label}`} 
          onChange={props.inputAction}
          className="form-control"
          style={props.style}
        />
      </label>
    </div>
  );
}

export default InputField;