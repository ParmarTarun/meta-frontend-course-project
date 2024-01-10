import React from "react";
import Section from "../Shared/Section";
import { testimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <Section dark={true}>
      <>
        <div className="text-center mb-10">
          <h1>TESTIMONIALS</h1>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-14">
          {testimonialsData.map((t, i) => (
            <div
              className="bg-light text-secondary rounded-lg shadow-lg max-h-[25rem] px-4 py-4 border border-primary"
              key={i}
            >
              <div className="text-secondary flex flex-col gap-2">
                <div className="flex">
                  {Array(parseInt(t.rating))
                    .fill(0)
                    .map((_, i) => (
                      <figure key={i}>
                        <img
                          src="/images/rating.png"
                          alt="rating_icon"
                          className="w-4"
                        />
                      </figure>
                    ))}
                </div>
                <div className="flex items-end gap-4">
                  <figure className="w-2/5">
                    <img
                      src={t.image}
                      alt="menu_image"
                      className="w-25 h-25 object-cover"
                    />
                  </figure>
                  <h3 className="font-bold">{t.name}</h3>
                </div>
                <p className="text-ellipsis overflow-hidden  line-clamp-3 font-semibold">
                  {t.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    </Section>
  );
};

export default Testimonials;
