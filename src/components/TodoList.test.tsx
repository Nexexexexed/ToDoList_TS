import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";

describe("TodoList", () => {
  it("adds new todo on Enter key", async () => {
    const store = configureStore({ reducer: { todos: todoReducer } });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const input = screen.getByPlaceholderText("What needs to be done ?");
    fireEvent.change(input, { target: { value: "New task" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(await screen.findByText("New task")).toBeInTheDocument();
  });
});
