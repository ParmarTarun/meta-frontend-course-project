import "./App.css";
import Bookings from "./components/Home/Bookings";
import Main from "./components/Home/Main";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Section from "./components/Shared/Section";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/booking" element={<Bookings />}></Route> 
          <Route path="/" element={<Main />}></Route>
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
