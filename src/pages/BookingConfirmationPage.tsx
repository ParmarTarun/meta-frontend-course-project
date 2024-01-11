import { useLocation } from "react-router-dom";
import Section from "../components/Shared/Section";

const BookingConfirmationPage = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return (
      <main>
        <Section dark={true}>
          <div className="text-center mb-10">
            <h1>Oops! Something went wrong</h1>
            <p>Looks like you landed here without entering the details</p>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main>
      <Section dark={true}>
        <>
          <div className="text-center mb-10">
            <h1>Booking Successfull!</h1>
          </div>
          <div className="flex flex-col gap-8 border border-primary rounded-lg shadow-lg p-4 text-center">
            <h3>Your Booking has been confirmed!</h3>
            <hr />
            <div className="ml-4 text-lg">
              <p>Date: {state.date}</p>
              <p>Time: {state.time}</p>
              <p>Total Guests: {state.guests}</p>
              <p>Occasion: {state.occasion}</p>
            </div>
          </div>
        </>
      </Section>
    </main>
  );
};

export default BookingConfirmationPage;
