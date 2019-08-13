import React from "react";
import Carousel from "nuka-carousel";
import { CarouselSettings } from "../utils";
//import DinahLandingPage from "../../assets/about/newTwoMirror.jpg";
//import DinahRightSpray from "../../assets/about/DinahRightSpray.jpg";
import Photos from "../assets/index";
import "./pages.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Carousel {...CarouselSettings} className="main-page-carousel">
        {Object.values(Photos).map(item => (
          <img src={item.image} alt="Dinah hair model" key={item.key} />
        ))}
      </Carousel>
    </div>
  );
};

export default LandingPage;
