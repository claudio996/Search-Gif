import React from "react";

const addCategory = () => {
  //export function for comunication with father componen

  const onInputChange = (event) => {
    console.log('ssss');
  };

  return (
    <input
      type="text"
      placeholder="Your browser gif"
      onChange={(event) => onInputChange(event)}
    />
  );
};

export default addCategory;
