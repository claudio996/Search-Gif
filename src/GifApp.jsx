import { useState } from "react";
import AddCategory from "./components/addCategory";

const GifApp = () => {
  const [categories, setCategories] = useState(); //categories => intial var-- setCategories => set value.
  //here created functions

  return (
    //Maqueting principal component
    <>
      <h1>Search Gif</h1>
      <AddCategory />
    </>
  );
};

export default GifApp;
