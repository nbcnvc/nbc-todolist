import Button from "../Button/Button";
import "./Todo.css";

const Todo = ({ todo, onRemoveHandler }) => {
  const isDoneToBtnType = {
    true: "cancel",
    false: "complete",
  };
  const isDone = todo.idDone;

  return (
    <div className="todo">
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div className="btn-group">
        <Button btnType="delete" onClickHandler={onRemoveHandler} todoId={todo.id}>삭제</Button>
        <Button btnType={isDoneToBtnType[isDone]}>
          {isDone ? "취소" : "완료"}
        </Button>
      </div>
    </div>
  );
};

export default Todo;
