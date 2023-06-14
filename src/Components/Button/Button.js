import './Button.css';

const Button = (props) => {
  const clickTodoHandler = () => {
    props.onClickHandler(props.todoId);
  }

  const btnType = props.btnType
  return <button onClick={clickTodoHandler}>{props.children}</button>
}

export default Button;
