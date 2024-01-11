import { bookingFormValues } from "./types";

const availableTimes = [
  ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  ["16:00", "17:00", "18:30", "21:30", "21:00", "23:00"],
  ["15:00", "18:00", "19:00", "20:00", "21:00", "22:30"],
  ["14:00", "20:00", "20:30", "21:00", "21:30", "23:30"],
  ["13:30", "18:00", "19:00", "20:00", "21:00", "23:20"],
  ["12:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  ["17:00", "18:30", "19:30", "20:00", "21:00", "23:00"],
  ["11:30", "12:30", "13:00", "14:00", "20:00", "21:00"],
  ["17:00", "18:30", "19:00", "20:30", "21:00", "22:00"],
  ["17:00", "18:30", "19:00", "20:00", "21:30", "22:00"],
];

// made a custom fetchApi function since provided url throws 404
export const fetchAPI = (date: string) => {
  // return array from availableTimes based on day (%10) from passed date
  const day = new Date(date).getDate() + 1;
  return availableTimes[day % 10];
};
// made a custom fetchApi function since provided url throws 404
export const submitAPI = (formData: bookingFormValues) => {
  return new Promise((res, rej) => {
    res(true);
  });
};

export const defautltBookingFormValues = () => {
  const today = new Date();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const formatted = today.getFullYear() + "-" + month + "-" + day;
  return {
    date: formatted,
    guests: 4,
    occasion: "Anniversary",
    time: fetchAPI(formatted)[0],
  };
};
