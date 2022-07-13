import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("should create snapshot", () => {
  const view = render(<SummaryForm />);
  expect(view).toMatchSnapshot();
});

test("should initial condition", () => {
  render(<SummaryForm />);
  const confirmOrderButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmOrderButton).toBeDisabled();

  const tcCheckbox = screen.getByRole('checkbox', { name: /term and conditions/i });
  expect(tcCheckbox).not.toBeChecked()
  
});

test("should enable confirm button on first click and disables on second click", () => {
  render(<SummaryForm />);
  const confirmOrderButton = screen.getByRole('button', { name: /confirm order/i });
  const tcCheckbox = screen.getByRole('checkbox', { name: /term and conditions/i });

  fireEvent.click(tcCheckbox);
  expect(confirmOrderButton).toBeEnabled();
  fireEvent.click(tcCheckbox);
  expect(confirmOrderButton).toBeDisabled();
});
