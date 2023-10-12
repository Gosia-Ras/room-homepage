import logo from "./images/logo.svg";
import classNames from "classnames";
import React, { useState } from "react";
import "./styles/header.css";

const Header = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  const headerClasses = classNames(
    "md:container w-full bg-transparent md:h-12 h-28 flex items-center gap-x-9 md:pl-12 md:pt-12 absolute z-10 transition-all duration-300",
    {
      "bg-white text-black": opened,
    }
  );

  /* conditionally applying the classes to the toggler based on the opened variable */
  const togglerClasses = classNames("tham-inner ", {
    "bg-slate-50": !opened,
    "bg-slate-500": opened,
  });

  const anchorClasses = classNames("hover:underline font-medium", {
    "text-black xs:font-bold lowercase": opened,
    "text-white": !opened,
  });

  const imgClasses = classNames("logo", {
    hidden: opened,
    "visible ml-0": !opened,
  });

  return (
    <header className={headerClasses}>
      <div
        className={classNames(`tham tham-e-squeeze tham-w-6 md:hidden pl-12`, {
          "tham-active": opened,
        })}
        onClick={handleClick}
      >
        <div className="tham-box">
          <div className={togglerClasses} />
        </div>
      </div>
      <img src={logo} alt="logo" className={imgClasses} />
      <a href="#home" className={anchorClasses}>
        Home
      </a>
      <a href="#shop" className={anchorClasses}>
        Shop
      </a>
      <a href="#about" className={anchorClasses}>
        About
      </a>
      <a href="#contact" className={anchorClasses}>
        Contact
      </a>
    </header>
  );
};

export default Header;
