import { it, expect, describe } from "vitest";
import Page1 from "../../src/Components/Page1";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

describe("Page1", () => {
    render(<Page1 />);
  it("Should have a heading tag", () => {
   screen.debug();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("Should have a Paragraph tag", () => {
    screen.debug();
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
});
