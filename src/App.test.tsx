import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./components/Bookings/BookingForm";
import { initializeTimes, updateTimes } from "./pages/BookingsPage";
import { timesAction } from "./types";
import { defautltBookingFormValues, fetchAPI } from "./utils";

test("Renders the Number of guests label", () => {
  render(
    <BookingForm
      availableTimes={["12:00"]}
      dispatch={jest.fn()}
      formData={defautltBookingFormValues()}
      handleOnChange={jest.fn()}
      handleSubmit={jest.fn()}
    />
  );
  const guestLabel = screen.getByText(/number of guests/i);
  expect(guestLabel).toBeInTheDocument();
});

test("initializeTimes returns the expexted values", () => {
  const initialState = initializeTimes();
  const expectedResult = fetchAPI(new Date().toLocaleDateString());
  expect(initialState).toEqual(expectedResult);
});

test("updateTimes returns the array of length based on month number", () => {
  const action = { type: "UPDATE_TIMES", data: "2024-10-10" };
  const newTimes = updateTimes([], action as timesAction);
  expect(newTimes).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
