import { fireEvent, render, screen } from "@testing-library/react";
import QuizButton from "../QuizButton";
import { replaceCamelcaseWithSpaces } from "../QuizButton";

test("Snapshot QuizButton", () => {
  const view = render(<QuizButton />);
  expect(view).toMatchSnapshot();
});

test("initial condition", () => {
  render(<QuizButton />);
  const sendEmailButton = screen.getByRole("button", { name: "Send Email" });
  expect(sendEmailButton).toBeEnabled();
});

test("Disable button when checkbox is checked", () => {
  render(<QuizButton />);

  const button = screen.getByRole("button", { name: "Send Email" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ "background-color": "grey" });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

describe("Replacing camel case with spaces by function", () => {
  test("Raplce color when it is not camel case", () => {
    expect(replaceCamelcaseWithSpaces("Red")).toBe("Red");
  });

  test("Replace two colors when there are two camel case", () => {
    expect(replaceCamelcaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Replace multiple colors when thare are more than 2 camel case", () => {
    expect(replaceCamelcaseWithSpaces("LightVioletRed")).toBe(
      "Light Violet Red"
    );
  });
});
