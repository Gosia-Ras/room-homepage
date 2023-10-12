import React from "react";
import "./components/styles/swiper.css";
import Header from "./components/Header";
import Slides from "./components/Swiper";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="z-0 relative">
        <Slides />
        <About />
      </main>
    </div>
  );
}

export default App;
