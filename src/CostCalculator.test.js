import { fireEvent, render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CostCalculator from "./CostCalculator";

test("Test if the CostCalculator is rendered", () => {
  render(<CostCalculator priceOfSingleVMPerHour={0.5} />);
  const costCalculatorText = screen.getByText(/VM Cost Calculator/i);
  expect(costCalculatorText).toBeInTheDocument();
});

test("Test if the CostCalculator renders the correct costs with 1 VM and 0.5 cost per hour", () => {
  render(<CostCalculator priceOfSingleVMPerHour={0.5} />);

  // enter input value of 1
  const inputField = screen.getByLabelText(/Number of VMs/i);
  act(() => {
    userEvent.type(inputField, "1");
  });

  // check if the cost per hour is 0.5
  const costPerHour = screen.getByText(/Cost per hour: 0.5/i);
  expect(costPerHour).toBeInTheDocument();

  // check if the cost per day is 12
  const costPerDay = screen.getByText(/Cost per day: 12/i);
  expect(costPerDay).toBeInTheDocument();

  // check if the cost per month is 360
  const costPerMonth = screen.getByText(/Cost per month: 360/i);
  expect(costPerMonth).toBeInTheDocument();

  // check if the cost per year is 4320
  const costPerYear = screen.getByText(/Cost per year: 4320/i);
  expect(costPerYear).toBeInTheDocument();
});

test("Test if the CostCalculator renders the correct costs with 2 VMs and 7.2 cost per hour", () => {
  render(<CostCalculator priceOfSingleVMPerHour={7.2} />);

  // enter input value of 2
  const inputField = screen.getByLabelText(/Number of VMs/i);
  act(() => {
    userEvent.type(inputField, "2");
  });

  // check if the cost per hour is 14.4
  const costPerHour = screen.getByText(/Cost per hour: 14.4/i);
  expect(costPerHour).toBeInTheDocument();

  // check if the cost per day is 345.6
  const costPerDay = screen.getByText(/Cost per day: 345.6/i);
  expect(costPerDay).toBeInTheDocument();

  // check if the cost per month is 10368
  const costPerMonth = screen.getByText(/Cost per month: 10368/i);
  expect(costPerMonth).toBeInTheDocument();

  // check if the cost per year is 124416
  const costPerYear = screen.getByText(/Cost per year: 124416/i);
  expect(costPerYear).toBeInTheDocument();
});

test("Test if the CostCalculator renders the correct costs with 9 VMs and 3.3 cost per hour", () => {
  render(<CostCalculator priceOfSingleVMPerHour={3.3} />);

  // enter input value of 9
  const inputField = screen.getByLabelText(/Number of VMs/i);
  act(() => {
    userEvent.type(inputField, "9");
  });

  // check if the cost per hour is 29.7
  const costPerHour = screen.getByText(/Cost per hour: 29.7/i);
  expect(costPerHour).toBeInTheDocument();

  // check if the cost per day is 712.8
  const costPerDay = screen.getByText(/Cost per day: 712.8/i);
  expect(costPerDay).toBeInTheDocument();

  // check if the cost per month is 21384
  const costPerMonth = screen.getByText(/Cost per month: 21384/i);
  expect(costPerMonth).toBeInTheDocument();

  // check if the cost per year is 256608
  const costPerYear = screen.getByText(/Cost per year: 256608/i);
  expect(costPerYear).toBeInTheDocument();
});
