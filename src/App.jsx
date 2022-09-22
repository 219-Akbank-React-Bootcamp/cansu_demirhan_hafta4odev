import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import CategoryList from "./components/CategoryList";
import StatusList from "./components/StatusList";
import { Button } from "react-bootstrap";

function App() {
  const [categories, setCategories] = useState([
    {
      text: "eğitim",
      statusList: [
        "ders saati belirlendi",
        "ders başladı",
        "dersteyiz",
        "ders bitti ödev verildi",
        "ödevler kontrol edildi",
      ],
    },
  ]);
  const addCategory = (cate) => {
    if (!cate.text || /^\s*$/.test(cate.text)) {
      return;
    }
    console.log(cate, "cate");
    const newCategories = [cate, ...categories];

    setCategories(newCategories);
    console.log(newCategories);
  };
  const removeCategory = (id) => {
    const removedArr = [...categories].filter((todo) => todo.id !== id);

    setCategories(removedArr);
  };

  const [showCategories, setShowCategories] = useState(false);
  const handleClose = () => setShowCategories(false);
  const handleOpen = () => setShowCategories(true);
  const showHideClassName = showCategories ? "display-block" : "display-none";

  const [showStatus, setshowStatus] = useState(false);
  const handleCloseStatus = () => setshowStatus(false);
  const handleOpenStatus = () => setshowStatus(true);
  const showHideStatusClassName = showStatus ? "display-block" : "display-none";

  return (
    <div className="todo-app">
      <TodoList />
      <Button onClick={handleOpen} className="edit-categories-button">
        {" "}
        Edit Categories{" "}
      </Button>
      <div className={showHideClassName}>
        <div className="modal" id="modal">
          <CategoryList
            handleOpen={handleOpenStatus}
            addCategory={addCategory}
            removeCategory={removeCategory}
            categories={categories}
          />
          <button onClick={handleClose} className="close-categories-button">
            Back to ToDos
          </button>
        </div>
      </div>
      <div className={showHideStatusClassName}>
        <div className="modal" id="modal">
          <StatusList />
          <button
            onClick={handleCloseStatus}
            className="close-categories-button"
          >
            Back to Categories
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
