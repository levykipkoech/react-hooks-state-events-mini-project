import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({ text: "", category: "" });

  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({ text: "", category: "" });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        <div>Details</div>
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleChange}
        />
      </label>
      <label>
        <div>Category</div>
        <select
          name="category"
          value={newTask.category}
          onChange={handleChange}
        >
          {categories.map((category, index) => {
            if (category !== "All") {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            }
          })}
        </select>
      </label>
      <button type="submit"> Add Task </button>
    </form>
  );
}



export default NewTaskForm;



