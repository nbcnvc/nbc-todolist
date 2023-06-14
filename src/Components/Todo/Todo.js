import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <div>
      제목: {todo.title}
      내용: {todo.content}
    </div>
  );
};

export default Todo;
