interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active filter" : "filter"}
      >
        All
      </button>
      <button
        onClick={() => setFilter("notcompleted")}
        className={filter === "notcompleted" ? "active filter" : "filter"}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active filter" : "filter"}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
