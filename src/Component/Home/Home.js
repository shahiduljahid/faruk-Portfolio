import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import faruk from "../../Photos/shuvo-removebg-preview.png";
import About from "../About/About";
import web from "../../Photos/responsive.png";
import banner from "../../Photos/online.png";
import logo from "../../Photos/logo-design.png";
import product from "../../Photos/studio.png";
import mockup from "../../Photos/product.png";
import businesscard from "../../Photos/business-card.png";
import Work from "../Work/Work";
import webPicture from "../../Photos/web.jpg";
import book from "../../Photos/book.jpg";
import art from "../../Photos/art.jpg";
import photo from "../../Photos/photo.jpg";
import card from "../../Photos/card.jpg";
import shoe from "../../Photos/shoe.jpg";
import finna from "../../Photos/Fiana.jpg";
import jhon from "../../Photos/John.jpg";
import Katappa from "../../Photos/Katappa.jpg";
import FeedBack from "../FeedBack/FeedBack";
import award from "../../Photos/award icon.JPG";
import cup from "../../Photos/cup icon.JPG";
import happy from "../../Photos/happy client icon.JPG";
import project from "../../Photos/complete project icon.JPG";
import Services from "../Services/Services";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

const Home = () => {
  const works = [
    {
      id: "1",
      img: web,
      title: "WEBSITE DESIGN",
      des1: "As a Designer I have the ability to solve any kind of web desing problem of your company. I always try to give my best effort into my works.”",
      des2: "You can easily give me an opportunity to show my creativity for your company.Me with my team will make a minimal & responsive website for your company.I wish you see my works and the happy clients testemonials.",
      des3: "Stay with us and be Creative be Happy.Thank you.",
    },
    {
      id: "2",
      img: banner,
      title: "BANNER DESIGN",
      des1: "As a Designer I have the ability to solve any kind of web desing problem of your company. I always try to give my best effort into my works.”",
      des2: "You can easily give me an opportunity to show my creativity for your company.Me with my team will make a minimal & responsive website for your company.I wish you see my works and the happy clients testemonials.",
      des3: "Stay with us and be Creative be Happy.Thank you.",
    },
    {
      id: "3",
      img: logo,
      title: "LOGO DESIGN",
      des1: "As a Designer I have the ability to solve any kind of web desing problem of your company. I always try to give my best effort into my works.”",
      des2: "You can easily give me an opportunity to show my creativity for your company.Me with my team will make a minimal & responsive website for your company.I wish you see my works and the happy clients testemonials.",
      des3: "Stay with us and be Creative be Happy.Thank you.",
    },
    {
      id: "4",
      img: product,
      title: "PRODUCT PHOTOGRAPHY",
      des1: "As a Designer I have the ability to solve any kind of web desing problem of your company. I always try to give my best effort into my works.”",
      des2: "You can easily give me an opportunity to show my creativity for your company.Me with my team will make a minimal & responsive website for your company.I wish you see my works and the happy clients testemonials.",
      des3: "Stay with us and be Creative be Happy.Thank you.",
    },
    {
      id: "5",
      img: businesscard,
      title: "BUISNESS CARD DESIGN",
      des1: "As a Designer I have the ability to solve any kind of web desing problem of your company. I always try to give my best effort into my works.”",
      des2: "You can easily give me an opportunity to show my creativity for your company.Me with my team will make a minimal & responsive website for your company.I wish you see my works and the happy clients testemonials.",
      des3: "Stay with us and be Creative be Happy.Thank you.",
    },
    {
      id: "6",
      img: mockup,
      title: "PRODUCT MOCKUP",
      des1: "As a Designer I have the ability to solve any kind of web desing problem of your company. I always try to give my best effort into my works.”",
      des2: "You can easily give me an opportunity to show my creativity for your company.Me with my team will make a minimal & responsive website for your company.I wish you see my works and the happy clients testemonials.",
      des3: "Stay with us and be Creative be Happy.Thank you.",
    },
  ];
  const feedBacks = [
    {
      id: "1",
      img: finna,
      title: "Logo Design",
      des: "I worked with many people before. He made it actually what i wanted to him.I’m satisfied with his work. ",
      name: "Fiana",
      address: "Brasillia, Brazil",
    },
    {
      id: "2",
      img: Katappa,
      title: "Web Design",
      des: "I worked with many people before. He made it actually what i wanted to him.I’m satisfied with his work. ",
      name: "Mr.Katappa",
      address: "NewYork, USA",
    },
    {
      id: "3",
      img: jhon,
      title: "Business Card",
      des: "I worked with many people before. He made it actually what i wanted to him.I’m satisfied with his work. ",
      name: "Mr.john",
      address: "Florida, USA",
    },
  ];
  const services = [
    {
      key: "1",
      img: happy,
      des: "Happy clients",
      count: "100+",
    },
    {
      key: "2",
      img: project,
      des: "complete project",
      count: "100+",
    },
    {
      key: "3",
      img: cup,
      des: "cup of tea",
      count: "75+",
    },
    {
      key: "4",
      img: award,
      des: "awards",
      count: "95+",
    },
  ];
  return (
    <div>
      <div className="bannerContainer mb-5">
        <Navbar></Navbar>

        <div className="row content  mb-5 justify-content-center ">
          <div
            style={{ textAlign: "left" }}
            className="col-md-3 col-11  mb-5 offset-md-1    mt-5 "
          >
            <p style={{ color: "white" }}>GET EVERY SINGLE SOLUTION</p>
            <h1 style={{ color: "white" }}>
              I’m <span style={{ color: "#ff9933" }}> FARUK AHMED</span>
            </h1>
            <h1 style={{ color: "white" }}>A UI/UX Designer</h1>
            <p style={{ color: "white" }}>
              DESIGNING IS MY PASSION. I WILL TRY TO DESIGN FOR YOUR COMPANY
              FROM HEART.PLEASE SEE MY WORKS BEFORE CONTACT.
            </p>

            <div className="d-flex">
              <a href="https://faruk-portfolio.web.app/" target="_blank"rel="noreferrer">
              <button className="btn text-bold text-dark  btn-color me-2">
                Portfolio
              </button>
              </a>
              <a href="https://www.facebook.com/F.A.shuvo.91221/" target="_blank"rel="noreferrer">
              <button className="btn text-bold text-dark btn-color ms-2">
                Contact
              </button>
              </a>
            </div>
          </div>
          <div className="bannerImage col-md-5 offset-md-1 ">
            <img
              style={{ height: "400px" }}
              src={faruk}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <About></About>

      <div id="skill" className="workContainer mt-5 mb-5 container">
        <h3 className="text-center mb-5 pb-2 color">Professional Services</h3>
        <div className="row justify-content-between">
          {works.map((pd) => (
            <Work key={pd.id} work={pd}></Work>
          ))}
        </div>
      </div>
      <div id="project" className=" mt-5 mb-5 projects container">
        <h3 className="text-center mb-5 pb-2 color">My Works</h3>
        <div className="row mx-1 justify-content-center">
          <div className="col-md-4 p-0">
            <img
              style={{ height: "350px", width: "100%" }}
              src={webPicture}
              alt="myprojectIMG"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 p-0">
            <img
              style={{ height: "350px", width: "100%" }}
              src={book}
              alt="myprojectIMG"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 p-0">
            <img
              style={{ height: "350px", width: "100%" }}
              src={art}
              alt="myprojectIMG"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 p-0">
            <img
              style={{ height: "350px", width: "100%" }}
              src={photo}
              alt="myprojectIMG"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 p-0">
            <img
              style={{ height: "350px", width: "100%" }}
              src={card}
              alt="myprojectIMG"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 p-0">
            <img
              style={{ height: "350px", width: "100%" }}
              src={shoe}
              alt="myprojectIMG"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="FeedBackContainer mt-5 mb-5 container">
        <h3 className="text-center mb-5 pb-2 color">Customers Review</h3>
        <div className="row mx-1 justify-content-around">
          {feedBacks.map((pd) => (
            <FeedBack key={pd.id} feedback={pd}></FeedBack>
          ))}
        </div>
      </div>
      <div className="container mb-5 mt-5 pt-5 ">
        <div className="row justify-content-between">
          {services.map((ser) => (
            <Services key={ser.id} service={ser}></Services>
          ))}
        </div>
      </div>

      <ContactForm></ContactForm>

      <Footer></Footer>



    </div>
  );
};

export default Home;
