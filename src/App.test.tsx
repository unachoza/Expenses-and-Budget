import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title 'Expenses & Budget'", () => {
  render(<App />);
  const linkElement = screen.getByText(/Expenses & Budget/i);
  expect(linkElement).toBeInTheDocument();
});
