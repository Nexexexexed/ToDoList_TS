import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TodoItem from "./TodoItem";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";

describe("TodoItem", () => {
  const mockTodo = { id: 1, text: "Test todo", completed: false };

  it("renders todo text", () => {
    const store = configureStore({ reducer: { todos: todoReducer } });

    render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );

    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });
});
