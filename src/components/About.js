import React from "react";
import aboutDark from "./images/image-about-dark.jpg";
import aboutLight from "./images/image-about-light.jpg";

const About = () => {
  return (
    <section className="about grid grid-cols-1 lg:grid-cols-3">
      <div>
        <img className="w-full" src={aboutDark} alt="Dark style furniture" />
      </div>
      <div className="lg:p-12 p-8">
        <h2 className="text-slate-900 font-bold text-2xl lg:text-3xl uppercase">
          About our furniture{" "}
        </h2>
        <p className="text-slate-900 opacity-75 mt-6">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best expresses your interests and what inspires you. Find the
          furniture pieces you need, from traditional to contemporary styles or
          anything in between. Product specialists are available to help you
          create your dream space.
        </p>
      </div>
      <div>
        <img
          className="w-full bg-contain"
          src={aboutLight}
          alt="White chair on white background"
        />
      </div>
    </section>
  );
};

export default About;
