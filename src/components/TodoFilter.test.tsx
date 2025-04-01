import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TodoFilter from "./TodoFilter";

describe("TodoFilter", () => {
  it("changes filter on button click", () => {
    const mockSetFilter = vi.fn();
    render(<TodoFilter filter="all" setFilter={mockSetFilter} />);

    fireEvent.click(screen.getByText("Active"));
    expect(mockSetFilter).toHaveBeenCalledWith("notcompleted");
  });
});
