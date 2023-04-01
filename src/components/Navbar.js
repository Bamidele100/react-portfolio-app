import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main">
      <nav className="nav">
        <div className="siteTitle">Bamidele Portfolio</div>
        <ul>
          <li>
            <Link to="home">
              <b>About Me</b>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="portfolio">
              <b>Portfolio</b>
            </Link>
          </li>
          <li>
            <Link to="contact">
              <b>Contact</b>
            </Link>
          </li>
          <li>
            <Link to="resume">
              <b>Resume</b>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
