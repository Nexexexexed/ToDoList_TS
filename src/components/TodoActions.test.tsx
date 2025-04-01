import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TodoActions from "./TodoActions";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";

describe("TodoActions", () => {
  it("renders clear completed button", () => {
    const store = configureStore({ reducer: { todos: todoReducer } });

    render(
      <Provider store={store}>
        <TodoActions />
      </Provider>
    );

    expect(screen.getByText("Clear completed")).toBeInTheDocument();
  });
});
