import { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [todoObj, setTodoObj] = useState({
    title: "",
    content: "",
    isDone: false,
  });

  const onAddTodo = (e) => {
    e.preventDefault();

    props.addTodoHandler(todoObj);
  };

  const titleChangeHandler = (e) => {
    setTodoObj((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };

  const contentChangeHandler = (e) => {
    setTodoObj((prevState) => {
      return {
        ...prevState,
        content: e.target.value,
      };
    });
  };

  return (
    <form onSubmit={onAddTodo}>
      <label for="title">제목</label>
      <input
        type="text"
        id="title"
        value={todoObj.title}
        onChange={titleChangeHandler}
      />
      <label for="content">내용</label>
      <input
        type="text"
        id="content"
        value={todoObj.content}
        onChange={contentChangeHandler}
      />
      <button>추가하기</button>
    </form>
  );
};

export default TodoForm;
