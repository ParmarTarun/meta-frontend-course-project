import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./components/Bookings/BookingForm";
import { defautltBookingFormValues } from "./constants";
import { initializeTimes, updateTimes } from "./pages/BookingsPage";
import { timesAction } from "./types";

test("Renders the Number of guests label", () => {
  render(
    <BookingForm
      availableTimes={["12:00"]}
      dispatch={jest.fn()}
      formData={defautltBookingFormValues}
      handleOnChange={jest.fn()}
      handleSubmit={jest.fn()}
    />
  );
  const guestLabel = screen.getByText(/number of guests/i);
  expect(guestLabel).toBeInTheDocument();
});

test("initializeTimes returns the expexted values", () => {
  const initialState = initializeTimes();
  const expectedResult = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initialState).toEqual(expectedResult);
});

test("updateTimes returns the array of length based on month number", () => {
  const action = { type: "UPDATE_TIMES", data: "2024-02-02" };
  const newTimes = updateTimes([], action as timesAction);
  expect(newTimes.length).toEqual(2);
});
