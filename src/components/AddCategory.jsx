import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //export function for comunication with father component
  const [InputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setInputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (InputValue.trim().length <= 1) return; 
    onNewCategory(InputValue.trim())

  }; 

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Your browser gif"
        value={InputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};


