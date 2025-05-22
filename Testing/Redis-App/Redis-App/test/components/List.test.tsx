import { it, expect, describe } from "vitest";
import List from "../../src/pages/List";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

describe("List", () => {
  const links = [
    "https://w3schools.com",
    "https://www.freecodecamp.org",
    "https://www.codecademy.com",
  ];

  it("Should display anchor tags properly", () => {
    render(<List links={links} />);
    screen.debug();
    const linkTags = screen.getAllByRole("link");

    expect(linkTags).toHaveLength(links.length); 
    linkTags.forEach((linkTag, index) => {
      expect(linkTag).toHaveTextContent(links[index]);
      expect(linkTag).toHaveAttribute("href", links[index]);
    });
  });
});