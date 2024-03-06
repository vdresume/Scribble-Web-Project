import React from "react";
import "./Project.css";
import {Link} from "react-router-dom";

let Project = () => {
  return (
    <>
      <div className="project-container">
        <div className="project-child">
          <div className="project-img">
            <img src="./Images/work-1.webp" alt="project-img" />
          </div>
          <div className="project-content">
            <h2>Red Paper Plane</h2>
            <h4>A small tagline</h4>
            <p>
              A sentence or two describing this item. Lorem ipsum dolor sit
              amet,
              <br /> consectetuer adipiscing elit, sed diam nonummy
              <br /> nibh euismod tincidunt ut laoreet.
            </p>
          </div>
        </div>

        <div className="project-child">
          <div className="project-content">
            <h2>Red Paper Plane</h2>
            <h4>A small tagline</h4>
            <p>
              A sentence or two describing this item. Lorem ipsum dolor sit
              amet,
              <br /> consectetuer adipiscing elit, sed diam nonummy
              <br /> nibh euismod tincidunt ut laoreet.
            </p>
          </div>
          <div className="project-img">
            <img src="./Images/work-2.webp" alt="project-img" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
