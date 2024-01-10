import { Link } from "react-router-dom";
import Chicago from "../Shared/Chicago";
import Section from "../Shared/Section";

const Hero = () => {
  return (
    <Section dark={true} classes="lg:mb-48">
      <div className="grid lg:grid-cols-5 grid-cols-1">
        <div className="lg:col-span-2 col-span-1 hero-content">
          <Chicago />
          <Link to={"/booking"}>
            <button className="btn-primary lg:mt-10 mt-4">
              Reserve a table
            </button>
          </Link>
        </div>
        <div className="lg:col-start-4 lg:col-span-2 col-span-1 mt-4">
          <figure className="lg:h-96">
            <img
              src="/images/hero.jpg"
              alt="hero_image"
              className="w-4/5 shadow-lg"
            />
          </figure>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
