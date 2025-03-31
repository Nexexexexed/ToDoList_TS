import { useDispatch } from "react-redux";
import { removeAllCompleted } from "../redux/todoSlice";

const TodoActions: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="action">
      <button onClick={() => dispatch(removeAllCompleted())}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoActions;
