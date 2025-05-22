import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";
import userEvent from "@testing-library/user-event";

import App from "../../src/App";

describe("Counter", () => {
    render(<App />);
  it("should be incremented", async () => {

    const incrementBtn = screen.getByRole("button", {
      name: "Increment", // Use the visible text of the button
    });

    const countElement = screen.getByText(/Count:/i);
    const user = userEvent.setup();

    await user.click(incrementBtn);

    expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveTextContent("Count:1");
  });

  it("should be decremented", async () => {
    

    const decrementBtn = screen.getByRole("button", {
      name: "Decrement",
    });

    const countElement = screen.getByText(/Count:/i);
    const user = userEvent.setup();

    await user.click(decrementBtn);

    expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveTextContent("Count:0");
  });
});