import React, { useState } from "react";
import NewStatusForm from "./NewStatusForm";
import Status from "./Status";

const StatusList = (props) => {
  const [status, setStatus] = useState([  
      { color: 'green', text: 'not-started' },
      { color: 'yellow', text: 'started' },
      { color: 'blue', text: 'ongoing' },
      { color: 'purple', text: 'almonst-done' },
      { color: 'red', text: 'done' }  
  ]);
  const addStatu = (cate) => {
    if (!cate.text || /^\s*$/.test(cate.text)) {
      return;
    }
    console.log(cate, "cate");
    const newStatus = [cate, ...status];

    setStatus(newStatus);
    console.log(newStatus);
  };
  const removeCategory = (id) => {
    const removedArr = [...status].filter((todo) => todo.id !== id);

    setStatus(removedArr);
  };

  return (
    <>
      <NewStatusForm onSubmit={addStatu} />
      <Status status={status}  removeCategory={removeCategory} />
    </>
  );
};

export default StatusList;
