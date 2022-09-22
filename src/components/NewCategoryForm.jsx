import React,{ useState, useEffect, useRef } from 'react'

const NewCategoryForm = (props) => {
const[categoryInput,setCategoryInput]=useState("");

const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
});
const handleChange = (e) => {
  setCategoryInput(e.target.value);
};
const handleSubmit = (e) => {
  e.preventDefault();
  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: categoryInput,
  });
  setCategoryInput("");
};

  return (
    <>
    <input
      placeholder='Add a category'
      value={categoryInput}
      onChange={handleChange}
      name='text'
      ref={inputRef}
      className='add-category-input'
    />
    <button onClick={handleSubmit} className='add-category-button'>
      Add New Category
    </button>
  </>
  )
}

export default NewCategoryForm