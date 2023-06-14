import { useState } from "react";

import Header from "./Components/Header/Header";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos((prevState) => {
      return [...prevState, todo];
    });
  };

  return (
    <>
      <Header />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />
    </>
  );
};

export default App;
