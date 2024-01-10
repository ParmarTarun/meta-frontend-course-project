import React, { FC } from "react";
import { bookingFormValues } from "../../types";

interface BookingFormProps {
  availableTimes: string[];
  formData: bookingFormValues;
  handleOnChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BookingForm: FC<BookingFormProps> = ({
  availableTimes,
  formData,
  handleSubmit,
  handleOnChange,
}) => {
  const { date, time, guests, occasion } = formData;
  return (
    <form
      className="grid gap-4 border rounded-lg shadow-lg m-auto w-2/5 p-4 text-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={date}
        onChange={handleOnChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={time} onChange={handleOnChange}>
        {availableTimes.map((t, i) => (
          <option key={i} value={t}>
            {t}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={guests}
        onChange={handleOnChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={handleOnChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <div className="text-center my-2">
        <button type="submit" className="btn-primary">
          Make a reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
