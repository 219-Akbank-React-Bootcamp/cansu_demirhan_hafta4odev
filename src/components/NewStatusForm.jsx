import React,{ useState, useEffect, useRef } from 'react'

const NewStatusForm = (props) => {
const[statuInput,setStatuInput]=useState("");

const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
});
const handleChange = (e) => {
  setStatuInput(e.target.value);
};
const handleSubmit = (e) => {
  e.preventDefault();

  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: statuInput,
   /*  color:statuColor */
  });
  setStatuInput("");
};

  return (
    <>
    <input
      placeholder='Add a statu'
      value={statuInput}
      onChange={handleChange}
      name='text'
      ref={inputRef}
      className='add-category-input'
    />
    <button onClick={handleSubmit} className='add-category-button'>
      Add New Statu
    </button>
  </>
  )
}

export default NewStatusForm