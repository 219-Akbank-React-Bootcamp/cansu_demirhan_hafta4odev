import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <Button onClick={handleSubmit} className="todo-button edit">
            Update
          </Button>
        </>
      ) : (
        <>
          <Row className="row">
            <input
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
            />

            <Form.Select size="sm" className="filter-select" onChange={handleChange}>
                  {props.categories.map((category, idx) => (
                <option key={idx} value={category}>{category}</option>))}
            </Form.Select>

            <Form.Select size="sm" className="filter-select">
              <option>status</option>
            </Form.Select>
            <button onClick={handleSubmit} className="todo-button">
              Add 
            </button>
          </Row>
        </>
      )}
    </form>
  );
}

export default TodoForm;
