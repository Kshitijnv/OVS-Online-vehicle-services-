import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { HiIconName } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Experience Premier Car <br /> Care Services <br /> in
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span> find the best car care service for your vehicle.</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} className="icon" />
            <input type="text" />
            <button className="button">search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={88000} end={9000} duration={1} />
                <span>+</span>
              </span>
              <span> Premier Product</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={1} />
                <span>+</span>
              </span>
              <span> Happy Customer</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={28} duration={1} />
                <span>+</span>
              </span>
              <span> Award Winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./Images/home-screen.jpg" alt="" />
            <div className="hero-title">
              <h1>
                Experience Premier Car <br /> Care Services <br /> in
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
