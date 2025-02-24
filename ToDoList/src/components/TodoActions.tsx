import { useDispatch } from "react-redux";
import { removeAllCompleted } from "../redux/todoSlice";

const TodoActions: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(removeAllCompleted())}>
        Удалить все завершенные
      </button>
    </div>
  );
};

export default TodoActions;
