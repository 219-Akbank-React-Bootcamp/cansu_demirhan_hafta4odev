import React, { useState } from "react";
import NewCategoryForm from "./NewCategoryForm";
import Categories from "./Categories";

const CategoryList = (props) => {

 
  return (
    <>
      <NewCategoryForm onSubmit={props.addCategory} />
      <Categories categories={props.categories} handleOpen={props.handleOpen} removeCategory={props.removeCategory} />
    </>
  );
};

export default CategoryList;
