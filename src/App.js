import { useState, useEffect } from "react";

import Header from "./Components/Header/Header";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

import { getTodosFromLS, saveTodosToLS } from "./Services/StorageService";

import "./App.css";

const App = () => {
  const initialTodos = getTodosFromLS("todos");
  const [todos, setTodos] = useState(initialTodos);

  // depend on todos state
  useEffect(() => {
    saveTodosToLS("todos", todos);
  }, [todos]);

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
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  const toggleIsDoneHandler = (todoId) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div className="container">
      <Header />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onRemoveTodoHandler={removeTodoHandler}
        onToggleIsDoneHandler={toggleIsDoneHandler}
      />
    </div>
  );
};

export default App;
