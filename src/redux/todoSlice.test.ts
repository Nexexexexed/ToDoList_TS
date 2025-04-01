import { describe, it, expect } from "vitest";
import todoReducer, { addTodo } from "./todoSlice";

describe("todoSlice", () => {
  it("should handle initial state", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual({
      todos: [],
    });
  });

  it("should handle addTodo", () => {
    const actual = todoReducer(undefined, addTodo("Test todo"));
    expect(actual.todos[0].text).toEqual("Test todo");
  });
});
