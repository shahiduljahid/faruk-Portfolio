import {
  faFacebookF,
 
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <div className="row justify-content-center footer-container">

        <div className="col-md-6">
          <h1 className="color">FARUK AHMED</h1>
          <p className="">Minimal & Creative portfolio/CV/Biodata</p>
          <p>Solution in one Platform</p>
          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a
                  href="https://www.facebook.com/F.A.shuvo.91221/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="socialLink me-3  color "
                    icon={faFacebookF}
                  />
                </a>
                <a
                  href="https://twitter.com/FarukAh04947994"
                  target="_blank "
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="socialLink me-3 color  "
                    icon={faTwitter}
                  />
                </a>

                <a href="https://www.instagram.com/faruk_shuvo_91221/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="socialLink me-3  color"
                    icon={faInstagram}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/faruk-ahmed-78b23721b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="socialLink me-3 color  "
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-color text-bold mt-2 mb-5 text-dark">Download CV</button>
          

        </div>
        <div className="col-md-6 mb-5 pb-5">

          <h3>I’m a Digital designer living in</h3>
          <h3 className="mt-1 mb-3">
          Dhaka, Bangladesh.

          </h3>
          <div className="row justify-content-between">

            <div className="col-md-3 mb-2">

              <h4 className="color mb-3">Send Mail</h4>
              <p className="m-0">mr.n91221@gmail.com</p>
            


            </div>
            <div className="col-md-4 mb-2 ">
            <h4 className="color mb-3">Make Call</h4>
              <p className="m-0">+880 1985715536</p>
              
            </div>
            <div className="col-md-3 mb-2">
            <h4 className="color mb-3">Address</h4>
              <p className="m-0">Narayanganj,Dhaka</p>
              <p className="m-0">Bangladesh.</p>
            </div>
          </div>


        </div>
        
        <div className="col-md-6 d-flex justify-content-center">
          Copyright © {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
