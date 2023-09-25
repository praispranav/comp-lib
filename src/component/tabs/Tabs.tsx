import { FC, useState } from "react";

import "./style.css";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div>
        <div className="navbar">
          <div className="nav-list">
            <div className="nav-item">
              <a href="#home">Home</a>
            </div>

            <div className="nav-item">
              <a href="#contact">Profile</a>
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className="nav-list">
            <div className="nav-item">
              <a href="#home">Home</a>
            </div>

            <div className="nav-item">
              <a href="#contact">Profile</a>
            </div>

            <div className="nav-item">
              <a href="#contact">Profile</a>
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className="nav-list">
            <div className="nav-item">
              <a href="#home">Home</a>
            </div>

            <div className="nav-item">
              <a href="#contact">Profile</a>
            </div>

            <div className="nav-item">
              <a href="#contact">Profile</a>
            </div>

            <div className="nav-item">
              <a href="#contact">Profile</a>
            </div>

            <div className="nav-item">
              <a href="#contact">Profile</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
