import React from "react";
import './Navbar.css'
import {Link} from "react-router-dom";
let Navbar =() => {
  return(
    <>
    <nav className="navbar navbar-expand-md bg-light fixed-top">

<div className="container-fluid">
          <img className="logo" src="./Images/logo (vd).jpg" alt="vdparmar" />
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapsibleNavbar"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar"></div>

  <ul className="navbar-nav" id="collapsibleNavbar">
    <li className="nav-item">
      <a className="nav-link" href="{./Hero}">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="{/About}">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="{/Project}">What We Do</a>
    </li>
    {/* <li className="nav-item">
      <a className="nav-link" href="#">Testimonials</a>
    </li> */}
    <li className="nav-item">
      <a className="nav-link" href="#">Contact Me</a>
    </li>
  
  {/* <button className="contact-btn" onClick={{}}>
  Log In
    </button>
    <button className="contact-btn" onClick={{}}>
  Sign Up
    </button> */}
    </ul>
</div>

</nav>
    </>
  )
}

export default Navbar;
