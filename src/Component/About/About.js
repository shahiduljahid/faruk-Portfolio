import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container mt-5 mb-5 pb-5">
      <h3 className="text-center mb-5 pb-2 color">About Me</h3>
      <div className="row justify-content-around">
        <div className="col-md-3 pt-5  offset-md-1">
          <h1 className="mb-5">
            Designing with passion While Exploring The World
          </h1>
          <button className="btn-color btn text-bold text-dark">
            Download CV
          </button>
        </div>
        <div className="col-md-5 shadow py-5 px-5 rounded aboutContent">
          <p>
            I specialize in building complex web applications, leading front-end
            teams, digital product design and developing visual design systems.
            I enjoy creating effortless user experience and designing delightful
            digital products. The entire process of going from a concept to
            release and gathering user’s feedback on either client’s or my own
            products is what makes me wake up everyday! Nowadays I lead product
            design at Tapdaq, previously I worked at Badoo and Socialbakers.
          </p>
          <p className="mt-2">
            Earlier in 2016 I started turning my expertise into building my own
            digital design products. This helped me to learn even more about
            users and gain a deeper knowledge about launching and selling stuff
            as an individual. My best known products across the design community
            are currently Dashboard UI Kit 3.0 and Dashboard UI Kit totalling
            over 4000 sold copies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
