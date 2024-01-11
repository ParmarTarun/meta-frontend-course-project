export type bookingFormValues = {
  date: string;
  time: string;
  guests: number;
  occasion: string;
};

export type timesAction = {
  type: "UPDATE_TIMES";
  data: string;
};
