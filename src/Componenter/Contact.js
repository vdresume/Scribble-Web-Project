import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

let Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-icon-box" style={{ flex: 1 }}>
            <div className="contact-icon">
              <img src="./Images/mail.jpg" text="mrvdparmar96@gmail.com"></img>
              <a href="https://mail.google.com/">mrvdparmar96@gmail.com</a>
            </div>
            <div className="contact-icon">
              <img src="./Images/linkdin.png">
                {/* <a href="https://www.linkedin.com/in/vishal-parmar-b01277297/"></a> */}
              </img>
              <p>
                <a href="https://www.linkedin.com/in/vishal-parmar-b01277297/">
                 www.linkedin.com/in/vishal-parmar
                </a>
              </p>
            </div>
          </div>
          <div className="contact-content" style={{ flex: 1 }}>
            <div className="contact-details">
              <form>
                <div className="form-container">
                  <input type="text" placeholder="First Name"></input>
                  <input type="text" placeholder="Last Name"></input>
                </div>

                <input type="text" placeholder="Email"></input>
                <textarea type="text" placeholder="Message" row={3}></textarea>

                <button className="btn">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
