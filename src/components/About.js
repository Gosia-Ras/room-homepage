import React from "react";
import aboutDark from "./images/image-about-dark.jpg";
import aboutLight from "./images/image-about-light.jpg";

const About = () => {
  return (
    <section className="flex flex-col desktop:flex-row" id="about">
      <div className="w-full desktop:w-[29.1%]">
        <img className="w-full" src={aboutDark} alt="Dark style furniture" />
      </div>
      <div className="desktop:w-[40.5%] flex flex-col justify-center gap-3 px-8 py-10 desktop:px-10 desktop:py-0">
        <h2 className="text-slate-900 font-bold text-[1.2rem] uppercase">
          About our furniture{" "}
        </h2>
        <p className="text-slate-900 opacity-75">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best expresses your interests and what inspires you. Find the
          furniture pieces you need, from traditional to contemporary styles or
          anything in between. Product specialists are available to help you
          create your dream space.
        </p>
      </div>
      <div className="desktop:w-[30.4%]">
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
