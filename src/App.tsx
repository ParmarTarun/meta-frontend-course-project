import "./App.css";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Section from "./components/Shared/Section";
import HomePage from "./pages/HomePage";
import BookingsPage from "./pages/BookingsPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/bookingConfirmation"
            element={<BookingConfirmationPage />}
          ></Route>
           <Route path="/booking" element={<BookingsPage />}></Route> 
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer />
        <Section>
          <div className="flex justify-between items-center bg-light px-">
            <figure>
              <img src="/images/logo.svg" alt="logo" />
            </figure>
            <p>Copyright Little Lemon</p>
          </div>
        </Section>
      </BrowserRouter>
    </>
  );
};

export default App;
