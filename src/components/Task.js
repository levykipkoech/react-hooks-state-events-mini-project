import React from "react";

function Task({ text, category, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask();
  };

  return (
    <div className="task">
      <div className="text">{text}</div>
      <div className="category">{category}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
