import React from "react";
import Navbar from "./Navbar";
import img1 from "../assets/ct1.png";
import img2 from "../assets/ct2.png";
import img3 from "../assets/ct3.png";
import img4 from "../assets/ct4.png";

const Hero = () => {
  return (
    <div className="hero relative h-screen">
      <Navbar />

      <img className="absolute top-0 left-0" src={img1} alt="DexMoney" />
      <img className="absolute bottom-0 right-0" src={img2} alt="DexMoney" />
      <img
        className="absolute top-[80px] left-[50px] opacity-75"
        src={img3}
        alt="Coin"
      />
      <img
        className="absolute bottom-[120px] right-[120px] opacity-75"
        src={img4}
        alt="Coin"
      />
    </div>
  );
};

export default Hero;
