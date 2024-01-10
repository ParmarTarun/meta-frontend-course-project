import Section from "../Shared/Section";
import Chicago from "../Shared/Chicago";

const About = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-5 grid-cols-1">
        <div className="lg:col-span-2 col-span-1 hero-content">
          <Chicago />
        </div>
        <div className="lg:col-start-4 lg:col-span-2 col-span-1 mt-4">
          <div className="text-left">
            <figure className="relative h-[12em] z-10">
              <img
                src="/images/about1.jpg"
                alt="hero_image"
                className="w-4/5 shadow-lg"
              />
            </figure>
            <figure className="">
              <img
                src="/images/about2.jpg"
                alt="hero_image"
                className="w-4/5 shadow-lg  ml-auto"
              />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
