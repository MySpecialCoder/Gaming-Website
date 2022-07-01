import React from "react";
import css from "../components css/Contact.css";
import cob from '../images/cob.jpg'
export default function Contact() {
  return (
    <>

    
    <div className="para">
      <img src={cob} alt="" />
    <div className="handling">
      <div className="heading">
        <h1>Contact Us Now</h1>
      </div>

      <div className="main-form main0" >
        <input required type="text" placeholder="Enter Your Name" />
        <input type="email" placeholder="Enter Your Email" />
      </div>

      <div className="main-form main1">
      </div>

      <div className="main-form main2">
        <input required type="password" placeholder="Enter Your New Password" />
        <input id="second" required type="password" placeholder="Confirm Your Password" />
      </div>


      <div className="submit">
        <input type="submit" value="Submit" />
      </div>
      </div>
      </div>

      <div className="containers">
            <div className="detail det">
                <ul>
                    <li>Contact</li>
                    <p>Follow Us On: </p>
                    <p>Facebook | Instagram | Twitter</p>
                </ul>
            </div>
        </div>
    </>
  );
}
