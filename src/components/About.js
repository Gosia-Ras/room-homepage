import React from "react";
import aboutDark from "./images/image-about-dark.jpg";
import aboutLight from "./images/image-about-light.jpg";

const About = () => {
  return (
    <section className="about grid grid-cols-3">
      <img className="w-full" src={aboutDark} alt="Dark style furniture" />
      <div className="p-10">
        <h2>About our furniture </h2>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best expresses your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </div>
      <img
        className="w-full"
        src={aboutLight}
        alt="White chair on white background"
      />
    </section>
  );
};

export default About;
