import React, { useState } from "react";
import "./navbar.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Function to show nav
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Function to close nav
  const closeNav = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        {/* LOGO */}
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              JHHomestay
            </h1>
          </a>
        </div>

        {/* BEGIN NAVBAR */}
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="/">LOGOUT</a>
            </button>
          </ul>
          {/* END NAVBAR */}

          {/* CLOSE NAVBAR */}
          <div className="closeNavbar" onClick={closeNav}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        {/* TOGGLE NAVBAR */}
        <div className="toggleNavbar" onClick={showNav}>
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
