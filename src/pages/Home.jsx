import React from "react";
import Logo from "../components/svgIcon/Logo";
import DownArrow from "../components/svgIcon/DownArrow";
import Products from "./Products";
import Navbar from "../components/Navbar";
import Bulding1 from "../components/homesvg/Bulding1";
import img1 from "../images/Grafika_bez1.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Home = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    // tl.to(".navPage",{scrollTrigger:{trigger:'hero',start:'top top',scrub:true}});
    // tl.to(".home",{y:-7000,scale:-1,scrollTrigger:{trigger:'hero',start:'top top',scrub:true}});
  }
);
  return (
    <div>
      <div className="hero">
        {/* <div className="navPage">
          <Navbar />
          <div className="bgsvg">
            <img src={img1} alt="" />
          </div>
        </div> */}
        <div className="home">
          <Logo />
          <div className="home--content">
            <h3>
              scroll down to discover All in one app - Explore the click of
              world where dreams are fulfilled
            </h3>
            <DownArrow />
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
