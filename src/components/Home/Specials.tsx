import { specialsData } from "../../data/specials";
import Section from "../Shared/Section";

const Specials = () => {
  return (
    <Section>
      <>
        <div className="flex justify-between items-center mb-10">
          <h1>SPECIALS</h1>
          <button className="btn-primary">Order Online</button>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-14">
          {specialsData.map((s, i) => (
            <div
              className="bg-secondary rounded-lg shadow-lg hover:shadow-primary max-h-[28rem]"
              key={i}
            >
              <figure>
                <img
                  src={s.image}
                  alt="menu_image"
                  className="rounded-b-none w-full h-60 object-cover"
                />
              </figure>
              <div className="p-4 text-light flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3>{s.title}</h3>
                  <p className="font-bold">{s.price}</p>
                </div>
                <p className="text-ellipsis overflow-hidden  line-clamp-3">
                  {s.desc}
                </p>
                <div>
                  <button className="btn-primary">Order a delivery</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </Section>
  );
};

export default Specials;
