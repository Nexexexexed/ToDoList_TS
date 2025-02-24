import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { RootState, AppDispatch } from "../redux/store";
import TodoItem from "./ToDoItem";
import TodoFilter from "./TodoFilter";
import TodoActions from "./TodoActions";

const TodoList: React.FC = () => {
  const [textToDo, settextToDo] = useState("");
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleAddTodo = () => {
    if (textToDo.trim()) {
      dispatch(addTodo(textToDo));
      settextToDo("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "notcompleted") return !todo.completed;
    if (filter == "completed") return todo.completed;
    return true;
  });
  return (
    <>
      <div>
        <input
          type="text"
          value={textToDo}
          onChange={(e) => settextToDo(e.target.value)}
          placeholder="добавить задачу"
        ></input>
        <button onClick={handleAddTodo}>Добавить</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <div>
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoActions />
      </div>
    </>
  );
};

export default TodoList;
