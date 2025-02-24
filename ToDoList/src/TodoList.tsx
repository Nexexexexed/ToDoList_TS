import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./redux/todoSlice";
import { RootState, AppDispatch } from "./redux/store";

const TodoList: React.FC = () => {
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  const [textToDo, settextToDo] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const todos: Todo[] = useSelector((state: RootState) => state.todos.todos);

  const handleAddTodo = () => {
    if (textToDo.trim()) {
      dispatch(addTodo(textToDo));
      settextToDo("");
    }
  };
  return (
    <div>
      <div>To Do List</div>
      <div>
        <input
          type="text"
          value={textToDo}
          onChange={(e) => {
            settextToDo(e.target.value);
          }}
          placeholder="Добавить задачу..."
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Выполнена
            </button>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
