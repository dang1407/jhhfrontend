import React, { useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbApps } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import "./home.scss";
import img1 from "../../assets/imgs/homestay1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Lets create a react hook to add a scroll animation.....
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      {/* <video src={video} muted autoPlay loop typeof = 'video/mp4'></video> */}
      <img src={img1} alt="" />
      {/* HOME CONTAINER */}
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            {" "}
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            {" "}
            Search your Holiday
          </h1>
        </div>

        {/* card grid */}
        <div data-aos="fade-up" className="cardDiv grid">
          {/* Search Destination */}
          <div className="destinationInput">
            <label htmlFor="city" className="city">
              Search your destination
            </label>

            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          {/* Select DATE */}
          <div className="dateInput">
            <label htmlFor="date" className="city">
              Select your date:{" "}
            </label>

            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          {/*  */}
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price: </label>
              <h3 className="total">$5000</h3>
            </div>

            <div className="input flex">
              <input type="range" max="5000" />
            </div>
          </div>

          {/* SEARCH OPTIONS */}
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span> MORE FILTER</span>
          </div>
        </div>

        <div className="homeFooter flex">
          {/* Right icons */}
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>

          {/* Left icons */}
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
