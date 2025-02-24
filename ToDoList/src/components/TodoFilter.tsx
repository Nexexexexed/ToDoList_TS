interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        Все
      </button>
      <button
        onClick={() => setFilter("notcompleted")}
        className={filter === "notcompleted" ? "active" : ""}
      >
        Активные
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Завершённые
      </button>
    </div>
  );
};

export default TodoFilter;
