import React from "react";
import Section from "../Shared/Section";
import Hero from "./Hero";

const Main = () => {
  return (
    <main>
      <Section dark={true} classes="lg:mb-48">
        <Hero />
      </Section>
    </main>
  );
};

export default Main;
