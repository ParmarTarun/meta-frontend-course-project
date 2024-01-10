import "./App.css";
import Bookings from "./components/Home/Bookings";
import Main from "./components/Home/Main";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      </BrowserRouter>
    </>
  );
};

export default App;
