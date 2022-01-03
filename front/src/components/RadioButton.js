import React from 'react';

const RadioButton = ({ foundingDate, onChange }) => {
  const { id, name, checked, label } = foundingDate;

  return (
    <>
      <input
        type="radio"
        id={id}
        value={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default RadioButton;
