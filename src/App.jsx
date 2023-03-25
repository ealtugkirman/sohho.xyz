import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import crowd from "./assets/crowd.png";
import Footer from "./pages/Footer"
import Banner from "./pages/Banner";
import Art from "./pages/Art";
import Tee from "./assets/TEE.png";
import bant from "./assets/bant.png";
import dj from "./assets/dj.png";
import condom from "./assets/condom.png";

export default function App() {
  return (
    <div className="selector w-max">
      <Art />
      <Banner />
      <Navbar />
      <Hero />
      <div className="flex-col bg-first">
        <img className="flex min-w-full" src={crowd} alt="none" />
        <img className="flex min-w-full" src={Tee} alt="none" />
        <img className="flex min-w-full" src={dj} alt="none" />
        <img className="flex min-w-full" src={condom} alt="none" />
        <img className="flex min-w-full" src={ bant } alt="none" />
        <Footer />
      </div>
    </div>
  );
}
