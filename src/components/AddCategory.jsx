import React, { useState } from "react";

const addCategory = () => {
  //export function for comunication with father component
  const [InputValue, setInputValue] = useState('VALUE-1')

  const onInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <input
      type="text"
      placeholder="Your browser gif"
      value={InputValue}
      onChange={(event) => onInputChange(event)}
    />
  );
};

export default addCategory;
