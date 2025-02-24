import { useDispatch } from "react-redux";
import { Todo } from "../redux/todoSlice";
import { toggleTodo } from "../redux/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? "✅" : "⏳"}
      </button>
      {todo.text}
    </li>
  );
};

export default TodoItem;
