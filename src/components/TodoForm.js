// src/components/TodoForm.js
import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState({
    text: "",
    category: "",
    priority: "Low",
    due_date: "",
  });

  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!task.text.trim()) {
      setError("Task name is required.");
      return;
    }
    if (!task.category.trim()) {
      setError("Category is required.");
      return;
    }
    if (!task.due_date) {
      setError("Due date is required.");
      return;
    }

    // Clear error if validation passes
    setError("");

    // Call the addTodo function passed as a prop
    addTodo(task);

    // Reset the form
    setTask({ text: "", category: "", priority: "Low", due_date: "" });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <input
        type="text"
        placeholder="Task Name"
        value={task.text}
        onChange={(e) => setTask({ ...task, text: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={task.category}
        onChange={(e) => setTask({ ...task, category: e.target.value })}
      />
      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={task.due_date}
        onChange={(e) => setTask({ ...task, due_date: e.target.value })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;