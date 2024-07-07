import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        Gemini
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="mainContainer">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip.</p>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="Message Icon" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>
        </div>

        <div className="mainBottom">
          <div className="searchBox">
            <input type="text" placeholder="Enter a prompt here" />
            <img src={assets.gallery_icon} alt="Gallery Icon" />
            <img src={assets.mic_icon} alt="Mic Icon" />
            <img src={assets.send_icon} alt="Send Icon" />
          </div>
          <div className="bottomInfo">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses.
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638478366355669447-552982381&p=privacy_notice&rd=1#privacy_notice">
              Your privacy and Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
