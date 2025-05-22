import { it, expect, describe } from "vitest";
import Page1 from "../../src/pages/Page1";
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
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
  it("should render heading which have href attribute",()=>{
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href","https://www.google.com");

  })
});
