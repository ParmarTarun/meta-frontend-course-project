import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Specials from "../components/Home/Specials";
import Testimonials from "../components/Home/Testimonials";

const HomePage = () => {
  return (
    <main>
      <>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </>
    </main>
  );
};

export default HomePage;
