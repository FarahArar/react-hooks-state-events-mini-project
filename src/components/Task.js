import React from "react";

function Task({task,onTaskDelete}) {
  const { text, category } = task;

  const handleDeleteClick = () => {
    onTaskDelete(task);
  };
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
