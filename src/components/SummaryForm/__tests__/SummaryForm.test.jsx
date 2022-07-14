import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("should create snapshot", () => {
  const view = render(<SummaryForm />);
  expect(view).toMatchSnapshot();
});

test("should initial condition", () => {
  render(<SummaryForm />);
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  expect(confirmOrderButton).toBeDisabled();

  const tcCheckbox = screen.getByRole("checkbox", {
    name: /term and conditions/i,
  });
  expect(tcCheckbox).not.toBeChecked();
});

test("should enable confirm button on first click and disables on second click", () => {
  render(<SummaryForm />);
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  const tcCheckbox = screen.getByRole("checkbox", {
    name: /term and conditions/i,
  });

  userEvent.click(tcCheckbox);
  expect(confirmOrderButton).toBeEnabled();
  userEvent.click(tcCheckbox);
  expect(confirmOrderButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  // Popover starts out hidden
  const nullPopover = screen.queryByText(
    /If not accept the term and conditions then no Ice cream will be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // Popover appears upon mouseover on checkbox label
  const termAndConditions = screen.getByText(/term and conditions/i);
  userEvent.hover(termAndConditions);
  const popover = screen.getByText(
    /If not accept the term and conditions then no Ice cream will be delivered/i
  );
  expect(popover).toBeInTheDocument();

  // Popoover disappears when we mousse out
  userEvent.unhover(termAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(
      /If not accept the term and conditions then no Ice cream will be delivered/i
    )
  );
});
