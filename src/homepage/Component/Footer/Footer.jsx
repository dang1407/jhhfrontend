import React from "react";
import { FiSend } from "react-icons/fi";
import { MdOutlineCardTravel } from "react-icons/md";
// import video1 from '../../assets/videos/JHHomestay.mp4'
import "./footer.scss";
import img from "../../assets/imgs/homestay.jpg";
const Footer = () => {
  return (
    <section className="footer">
      <div className="imgDiv">
        {/* <video src= {video1} loop autoPlay muted type='video/mp4'></video> */}
        <img src={img} alt="" />
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            {/* <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineCardTravel className= 'icon' />
                Travel
              </a>
            </div>

            <div className="footerParagraph">
              Bla bla............
            </div> */}

            <div className="footerSocials"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
