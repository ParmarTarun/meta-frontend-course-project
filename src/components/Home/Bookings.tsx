import Section from "../Shared/Section";
import BookingForm from "./BookingForm";

const Bookings = () => {
  return (
    <Section dark={true}>
      <>
        <div className="text-center mb-10">
          <h1>Enter Details</h1>
        </div>
        <BookingForm />
      </>
    </Section>
  );
};

export default Bookings;
