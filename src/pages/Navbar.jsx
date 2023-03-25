import React from "react";
import hi from "../assets/hi.png";

function Navbar() {
  return (
    <div>
      <div className="bg-second justify-center items-center flex">
        <h1 className="py-5 lg:py-10  text-8xl font-soho">S</h1>
        <img className="animate-reverse-spin" src={hi} alt="hi" />
        <h1 className="py-5 lg:py-10  text-8xl font-soho">HH</h1>
        <img className="animate-spin" src={hi} alt="hi" />
      </div>
    </div>
  );
}

export default Navbar;
