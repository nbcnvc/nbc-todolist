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
		if (todoObj.title.trim() === "" || todoObj.content.trim() === "") {
      alert("제목과 내용은 비워둘 수 없습니다.");
      return;
    }

    props.addTodoHandler(todoObj);
    setTodoObj({
      title: "",
      content: "",
      isDone: false,
    });
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
    <div>
      <form onSubmit={onAddTodo}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={todoObj.title}
          onChange={titleChangeHandler}
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="content"
          value={todoObj.content}
          onChange={contentChangeHandler}
        />
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default TodoForm;
