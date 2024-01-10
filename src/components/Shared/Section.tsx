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
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
