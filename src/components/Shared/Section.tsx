import React, { FC } from "react";

interface SectionProps {
  children: React.ReactElement;
  dark?: boolean;
  classes?: string;
}

const Section: FC<SectionProps> = ({ children, dark, classes }) => {
  return (
    <section
      className={`px-2 py-8 ${
        dark ? "bg-secondary text-light" : "bg-light text-dark"
      } grid grid-cols-12 ${classes}`}
    >
      <article className="lg:col-start-3 lg:col-span-8 col-start-2 col-span-10">
        {children}
      </article>
    </section>
  );
};

export default Section;
