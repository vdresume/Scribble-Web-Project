import React from "react";
import './Hero.css';
import {Link} from "react-router-dom";

let Hero = () =>{
    return(
        <>
       
       <>
  {/* Carousel */}
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to={0}
        className="active"
      />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
    </div>
    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="./Images/slider-1.webp"
          alt="Los Angeles"
          className="d-block"
          style={{ width: "100%" }}
        />
        <div className="carousel-caption">
        <h1>SCRIBBLE</h1>
        <h3>SEO SOLUTIONS</h3>
        <button className="carousel-btn">LET'S WORK TOGETHER!</button>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="./Images/slider-4.jpg"
          alt="Chicago"
          className="d-block"
          style={{ width: "100%" }}
        />
       <div class="carousel-caption">
        <h1>SCRIBBLE</h1>
        <h3>SEO SOLUTIONS</h3>
        <button class="carousel-btn">LET'S WORK TOGETHER!</button>
      </div>
      </div>
      <div className="carousel-item">
        <img
          src="./Images/slider-3.webp"
          alt="New York"
          className="d-block"
          style={{ width: "100%" }}
        />
         <div class="carousel-caption">
        <h1>SCRIBBLE</h1>
        <h3>SEO SOLUTIONS</h3>
        <button class="carousel-btn">LET'S WORK TOGETHER!</button>
      </div>
      </div>
    </div>
    {/* Left and right controls/icons */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>
</>

</>
    )
}
export default Hero;