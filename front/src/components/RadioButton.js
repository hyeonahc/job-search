import React from 'react';

const RadioButton = ({ id, name, label }) => {
  return (
    <div>
      <div>
        <input type="radio" id={id} name={name} />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

export default RadioButton;
