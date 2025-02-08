// src/components/TodoList.js
import React from "react";
import "./TodoList.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <button
            className="delete-button"
            onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;