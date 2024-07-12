import React from "react";
//const image = "../Picture/bg.png";
//import AboutBackgroundImage from "../Assets/about-background-image.png";
//import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <>
    <div className="-section-container">
      <div className="bg1-image-container">
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Enjoy the catch of the day,your way
        </h1>
        <p className="primary-text">
         Food is everything we are.it's an extension of
         nationalist feeling,ethinic feeling,your
         personal history,your province,your region,
         your tribe,your grandma.it's inseparable
         from those from the get-go............
        </p>
        <p className="primary-text">
          Taste that makes you go yummmmmmmmmm.
        </p>
        <div className="about-buttons-container">
          <a href="https://restaurantify.com/wp-content/uploads/2022/10/RFY_INFOGRAPHICS02_CHARACTERISTICS-OF-A-GOOD-RESTAURANT-MENU.png">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
          </button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;