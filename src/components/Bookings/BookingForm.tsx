import React, { FC, useEffect } from "react";
import { bookingFormValues, timesAction } from "../../types";

interface BookingFormProps {
  availableTimes: string[];
  formData: bookingFormValues;
  handleOnChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  dispatch: React.Dispatch<timesAction>;
}

const BookingForm: FC<BookingFormProps> = ({
  availableTimes,
  formData,
  handleSubmit,
  handleOnChange,
  dispatch,
}) => {
  const { date, time, guests, occasion } = formData;

  useEffect(() => {
    dispatch({ data: formData.date, type: "UPDATE_TIMES" });
  }, [formData.date]);

  return (
    <form
      className="grid gap-4 border rounded-lg shadow-lg m-auto lg:w-2/5 w-100 lg:p-4 p-1 text-center"
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
        required
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
        <button type="submit" className="btn-primary" aria-label="On Click">
          Make a reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
