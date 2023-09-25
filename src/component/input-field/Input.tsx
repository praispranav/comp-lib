import { FC, useState } from "react";

import "./style.css";
import { BsXCircleFill } from "react-icons/bs";

export const Input = () => {
  return (
    <>
      <div>
        <div className="input-container">
          <input type="text" placeholder="Inactive" disabled />
          {/* <div className="icon">
        <BsXCircleFill />
      </div> */}
        </div>
        <div className="input-container">
          <input type="text" placeholder="Hover" />
          {/* <div className="icon">
      <BsXCircleFill />
    </div> */}
        </div>

        <div className="input-container">
          <input type="text" placeholder="disabled" disabled />
          {/* <div className="icon">
      <BsXCircleFill />
    </div> */}
        </div>
        <p style={{ marginLeft: "20em", marginTop: "2em" }}>Lable*</p>
        <div className="input-container">
          <input type="text" placeholder="Activated" color="#1E3D8C" />
          {/* <div className="icon">
      <BsXCircleFill />
    </div> */}
        </div>
        <p style={{ marginLeft: "20em", marginTop: "2em" }}>Error*</p>
        <div className="input-container">
          <input type="text" placeholder="Error" color="#DC2626" />
          {/* <div className="icon">
      <BsXCircleFill />
    </div> */}
        </div>
      </div>
    </>
  );
};
