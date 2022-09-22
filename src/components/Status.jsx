import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Status = (props) => {
  return props.status.map((todo, index) => (
    <div className="todo-row" key={index}>
      <div key={todo.id}>{todo.text}</div>     
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

export default Status;
