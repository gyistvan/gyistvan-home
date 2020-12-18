import React from "react";
import "../assets/styles/Header.css";
import Carousel from "react-material-ui-carousel";
import CarouselLogoTop from "../assets/images/carousel-logo-top.svg";
import CarouselLogoBottom1 from "../assets/images/carousel-logo-bottom1.svg";
import CarouselLogoBottom2 from "../assets/images/carousel-logo-bottom2.svg";

function Header() {
  const logoBottomImages = [CarouselLogoBottom1, CarouselLogoBottom2];
  return (
    <div id="header">
      <div className="navbar">
        <span className="logo">istvan gyarmati</span>
        <div className="menu">
          <span>Welcome</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="container">
        <div className="logo-carousel">
          <img src={CarouselLogoTop} alt="logo" />
          <Carousel indicators={false}>
            {logoBottomImages.map(image => (
              <img src={image} alt="logo bottom" />
            ))}
          </Carousel>
        </div>
        <div className="mainCarousel"></div>
      </div>
    </div>
  );
}

export default Header;
