import "./Button.css";

const Button = ({ children, todoId, btnType, onClickHandler }) => {
  const clickTodoHandler = () => {
    onClickHandler(todoId);
  };

  return <button onClick={clickTodoHandler}>{children}</button>;
};

export default Button;
