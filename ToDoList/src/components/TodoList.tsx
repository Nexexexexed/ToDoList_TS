import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { RootState, AppDispatch } from "../redux/store";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";
import TodoActions from "./TodoActions";

import "../styles/TodoList.css";

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
    <div className="container">
      <div className="head_text">todos</div>
      <div className="main_block">
        <div className="input_block">
          <input
            type="text"
            value={textToDo}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                handleAddTodo();
              }
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              settextToDo(e.target.value);
            }}
            placeholder="What needs to be done ?"
            className="input_text"
          ></input>
        </div>
        <ul className="tasks">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
        <div className="filters_action">
          <div className="counter">
            {todos.reduce((acc, todo) => {
              if (!todo.completed) {
                return acc + 1;
              }
              return acc;
            }, 0)}{" "}
            items left
          </div>
          <TodoFilter filter={filter} setFilter={setFilter} />
          <TodoActions />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
