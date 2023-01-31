import { useState } from "react";
import { AddCategory } from "./components/addCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Gorillaz", "Linkin Park"]); //categories => intial var-- setCategories => set value.
  //here created functions

  const OnAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    //Maqueting principal component
    <>
      <h1>Search Gif</h1>
      <AddCategory onNewCategory={(event) => OnAddCategory(event)} />
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};
