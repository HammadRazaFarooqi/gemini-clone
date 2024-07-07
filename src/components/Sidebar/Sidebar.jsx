import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

function Sidebar() {
  const [Extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => {
            setExtended((prev) => !prev);
          }}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div className="newChat">
          <img src={assets.plus_icon} alt="" />
          {Extended ? <p>New Chat</p> : null}
        </div>
        {Extended ? (
          <div className="recent">
            <p className="recentTitile">Recent</p>
            <div className="recentEntry">
              <img src={assets.message_icon} alt="" />
              <p>what is React ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottomItem recentEntry">
          <img src={assets.question_icon} alt="" />
          {Extended ? <p>Help</p> : null}
        </div>
        <div className="bottomItem recentEntry">
          <img src={assets.history_icon} alt="" />{" "}
          {Extended ? <p>Activity</p> : null}
        </div>
        <div className="bottomItem recentEntry">
          <img src={assets.setting_icon} alt="" />
          {Extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
