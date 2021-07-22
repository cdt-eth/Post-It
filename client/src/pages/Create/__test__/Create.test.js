import { render, screen, fireEvent } from "@testing-library/react";
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

it("should allow the title input to add text and delete it", () => {
  const utils = render(<Create />);
  const input = utils.getByTestId("title");

  fireEvent.change(input, { target: { value: "Testing the title field" } });
  expect(input.value).toBe("Testing the title field");

  fireEvent.change(input, { target: { value: "" } });
  expect(input.value).toBe("");
});

it("should allow the description input to add text and delete it", () => {
  const utils = render(<Create />);
  const input = utils.getByTestId("description");

  fireEvent.change(input, {
    target: { value: "Testing the description field" },
  });
  expect(input.value).toBe("Testing the description field");

  fireEvent.change(input, { target: { value: "" } });
  expect(input.value).toBe("");
});

it("enables submit when form is filled out", () => {
  const { getByTestId } = render(<Create />);
  const title = getByTestId("title");
  const description = getByTestId("description");
  const submit = getByTestId("submit-button");

  fireEvent.change(title, { target: { value: "title value typed" } });
  fireEvent.change(description, { target: { value: "test description" } });

  fireEvent.click(submit);

  expect(submit).not.toHaveClass("Mui-disabled");
});
