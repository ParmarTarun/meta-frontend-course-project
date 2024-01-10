import React from "react";

const BookingForm = () => {
  return (
    <form className="grid gap-4 border rounded-lg shadow-lg m-auto w-2/5 p-4 text-center ">
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
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
