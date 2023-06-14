import { useState } from 'react';

import Header from "./Components/Header/Header";
import TodoForm from "./Components/TodoForm/TodoForm";

import './App.css'


const App = () => {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (todo) => {
    setTodos((prevState) => {
      return [...prevState, todo]
    })
  }

  return (
    <div>
      <Header />
      <TodoForm addTodoHandler={addTodoHandler}/>
    </div>
  );
}

export default App;
