import { useDispatch } from "react-redux";
import { Todo } from "../redux/todoSlice";
import { toggleTodo } from "../redux/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="task">
      <input
        type="radio"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className={`input_done ${todo.completed ? "check_done" : ""}`}
      />
      <span className={todo.completed ? "done done_text" : ""}>
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;
