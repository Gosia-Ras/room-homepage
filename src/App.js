import React from "react";
import "./components/styles/swiper.css";
import logo from "../src/components/images/logo.svg";
import Slides from "./components/Swiper";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <header className="container bg-transparent h-12 flex items-center gap-x-9 pl-12 pt-12 absolute z-10">
        <img src={logo} alt="logo" />
        <a href="#home" className="hover:underline font-medium text-white ">
          Home
        </a>
        <a href="#shop" className="hover:underline font-medium text-white">
          Shop
        </a>
        <a href="#about" className="hover:underline font-medium text-white">
          About
        </a>
        <a href="#contact" className="hover:underline font-medium text-white">
          Contact
        </a>
      </header>
      <main className="z-0 relative">
        <Slides />
        <About />
      </main>
    </div>
  );
}

export default App;
