import React from "react";
import './About.css';
import { Link } from "react-router-dom";

let About = () => {
  return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center mt-5">
              <h1>WE'RE AN SEO COMPANY FOR STARTUPS AND BUSINESSES</h1>
              <p>
                A sentence or two describing this item. Lorem ipsum dolor sit
                amet, <br />
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet.
              </p>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="content">
            <div className="content-box">
              <h4>
                Creative SEO Solutions
              </h4>
              <p>
                A sentence or two describing this item. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet.
              </p>
            </div>
            <div className="content-box">
              <h4>
                Maximize Your Resources
              </h4>
              <p>
                A sentence or two describing this item. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet.
              </p>
            </div>
            <div className="content-box">
              <h4>
                Increase Marketing ROI
              </h4>
              <p>
                A sentence or two describing this item. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet.
              </p>
            </div>
            <div className="content-box">
              <h4>
                Performance Tracking
              </h4>
              <p>
                A sentence or two describing this item. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};
export default About;
