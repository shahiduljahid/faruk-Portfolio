import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-2">
      <div className="container-fluid mx-2">
        <div className="align-items-center d-flex">
          <Link style={{ textDecoration: "none" }} to={"/home"}>
            <span
              style={{ color: "#ff9933", fontWeight: "bold", fontSize: "20px" }}
              className=""
            >
              Faroook
            </span>
          </Link>
        </div>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center d-flex align-items-center  mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                to={"/home"}
                className="nav-link text-light text-bold  me-5  "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <a href="#skill" className="nav-link text-light text-bold  me-5 ">
                Skills
              </a>
            </li>

            <li className="nav-item ">
              <a
                href="#project"
                className="nav-link text-light text-bold  me-5 "
              >
                Projects
              </a>
            </li>
            <li className="nav-item ">
              <a
                href="#contact"
                className="nav-link text-light text-bold   navigation me-5  "
              >
                Contact
              </a>
            </li>

            {/* <li className="nav-item ">
              <Link
                to={"/blogs"}
                className="nav-link  navigation  me-5 text-light "
              >
                Blogs
              </Link>
            </li> */}
            {/* <li className="nav-item ">
              <a
                href="https://drive.google.com/file/d/1WOg4DovR60RMKcoI_wOQ_87EJ0WZ08yD/view"
                target="_blank"
                rel="noreferrer"
                className="nav-link  navigation   text-light "
              >
                Resume
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
