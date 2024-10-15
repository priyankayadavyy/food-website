import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import Facebook from "../../assets/facebook_icon.png";
import Linkedin from "../../assets/linkedin_icon.png";
import Twitter from "../../assets/twitter_icon.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={Logo} alt="" />
          <p>Stay updated with our latest news and special offers!</p>
          <div className="footer-social-icons">
            <img src={Facebook} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Twitter} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home </li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-xxxxx</li>
            <li>xyz@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Created By Priyanka Yadav 2024 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
