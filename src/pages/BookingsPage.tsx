import { useState } from "react";
import { bookingFormValues } from "../types";
import { defautltBookingFormValues } from "../constants";
import Section from "../components/Shared/Section";
import BookingForm from "../components/Bookings/BookingForm";

const BookingsPage = () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [formData, setFormData] = useState<bookingFormValues>(
    defautltBookingFormValues
  );
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
    <Section dark={true}>
      <>
        <div className="text-center mb-10">
          <h1>Enter Details</h1>
        </div>
        <BookingForm
          availableTimes={availableTimes}
          formData={formData}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
        />
      </>
    </Section>
  );
};

export default BookingsPage;
