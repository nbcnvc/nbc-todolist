import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = (props) => {
  const { doneList, workingList } = props.todos.reduce(
    (acc, todo) => {
      const component = (
        <Todo
          key={todo.id}
          todo={todo}
          onRemoveHandler={props.onRemoveTodoHandler}
          onToggleIsDoneHandler={props.onToggleIsDoneHandler}
        />
      );

      if (todo.isDone) {
        acc.doneList.push(component);
      } else {
        acc.workingList.push(component);
      }
      return acc;
    },
    { doneList: [], workingList: [] }
  );

  return (
    <div className="todo-list">
      <h2>working</h2>
      <div className="todo-list__working">{workingList}</div>

      <h2>done</h2>
      <div className="todo-list__done">{doneList}</div>
    </div>
  );
};

export default TodoList;
