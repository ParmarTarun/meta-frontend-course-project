import { useReducer, useState } from "react";
import { bookingFormValues, timesAction } from "../types";
import Section from "../components/Shared/Section";
import BookingForm from "../components/Bookings/BookingForm";
import { defautltBookingFormValues, fetchAPI } from "../utils";

export const initializeTimes = () => fetchAPI(new Date().toLocaleDateString());

export const updateTimes = (state: string[], action: timesAction) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // generating random times array of length based on month number
      const times = fetchAPI(action.data);
      return [...times];
    default:
      return state;
  }
};

const BookingsPage = () => {
  const [formData, setFormData] = useState<bookingFormValues>(
    defautltBookingFormValues()
  );

  const [times, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted");
  };

  return (
    <main>
      <Section dark={true}>
        <>
          <div className="text-center mb-10">
            <h1>Enter Details</h1>
          </div>
          <BookingForm
            availableTimes={times}
            formData={formData}
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            dispatch={dispatch}
          />
        </>
      </Section>
    </main>
  );
};

export default BookingsPage;
