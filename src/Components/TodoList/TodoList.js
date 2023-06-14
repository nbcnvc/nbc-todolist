import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo, idx) => (
        <Todo key={idx} todo={todo} onRemoveHandler={props.onRemoveTodoHandler} />
      ))}
    </div>
  );
};

export default TodoList;
