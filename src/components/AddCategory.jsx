import React, { useState } from "react";

const addCategory = () => {
  //export function for comunication with father component
  const [InputValue, setInputValue] = useState("VALUE-1");

  const onInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(InputValue.trim().length <= 1) return;
    
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

export default addCategory;
