import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Categories = (props) => {
  return props.categories.map((todo, index) => (
    <div className="todo-row" key={index}>
      <div key={todo.id}>{todo.text}</div>
      <button onClick={props.handleOpen} key={todo.id} className="edit-status-button">Edit Status</button>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => props.removeCategory(todo.id)}
          className="delete-icon"
        />
        <TiEdit className="edit-icon" />
      </div>
    </div>
  ));
};

export default Categories;
