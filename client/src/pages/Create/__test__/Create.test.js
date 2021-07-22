import { render, screen } from "@testing-library/react";
import Create from "../Create";

it("should have an input field named Title", () => {
  render(<Create />);

  const inputNode = screen.getByText("Title");
  expect(inputNode).toBeInTheDocument();
});

it("should have an input field named Description", () => {
  render(<Create />);

  const inputNode = screen.getByText("Description");
  expect(inputNode).toBeInTheDocument();
});

it("should have a Submit button", () => {
  render(<Create />);

  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});
