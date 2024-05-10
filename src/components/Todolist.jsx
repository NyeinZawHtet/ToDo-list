import React from "react";
import Todo from "./Todo";

export default function Todolist({ todos, deleteTodo, updateTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </>
  );
}
