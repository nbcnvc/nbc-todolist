import { useState } from "react";

import Header from "./Components/Header/Header";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    const maxId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) : 0;
    const newId = maxId + 1;
    todo.id = newId;

    setTodos((prevState) => {
      return [...prevState, todo];
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id != todoId);
    });
  };

  return (
    <>
      <Header />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onRemoveTodoHandler={removeTodoHandler} />
    </>
  );
};

export default App;
