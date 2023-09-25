import { FC } from "react";
import { AiOutlineArrowDown, AiOutlinePlus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

import "./style.css";

const RawBUtton = ({ color, variant, icon }) => {
  const getVariantClass = () =>{
    if(variant === 'filled') return ""
    return "outlined"
  }
  const Icon = icon
  return (
    <div>
      <button className={`icon-button bg-${color || 'primary'} ${getVariantClass()}`}>
        <Icon className="icon" /> Extended FAB
      </button>
    </div>
  );
};

export const Button = () => {
  return (
    <div className="inline">
      <div className="container">
        <div className="flex">
          <p className="heading-text">Enable</p>
          <AiOutlineArrowDown size={28} />
        </div>

        <div>
          <button
            className="icon-button"
            style={{ backgroundColor: "#CAD9FF" }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>

        <div>
          <button
            className="icon-button"
            style={{ backgroundColor: "#BFD0FD" }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>
        <div>
          <button
            className="icon-button"
            style={{
              backgroundColor: "transparent",
              color: "#1D387E",
              border: "2px solid #1D387E",
            }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          <p className="heading-text">Hover</p>
          <AiOutlineArrowDown size={28} />
        </div>
        <div>
          <button className="hover-button">
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>

        <div>
          <button
            className="hover-button"
            style={{ backgroundColor: "#CAD9FF" }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>

        <div>
          <button
            className="hover-button"
            style={{ backgroundColor: "#BFD0FD" }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>
        <div>
          <button
            className="hover-button"
            style={{
              backgroundColor: "transparent",
              color: "#1D387E",
              border: "2px solid #1D387E",
            }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          <p className="heading-text">Focused</p>
          <AiOutlineArrowDown size={28} />
        </div>
        <div>
          <button className="focused-button">
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>

        <div>
          <button
            className="focused-button"
            style={{ backgroundColor: "#CAD9FF" }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>

        <div>
          <button
            className="focused-button"
            style={{ backgroundColor: "#BFD0FD" }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>
        <div>
          <button
            className="focused-button"
            style={{
              backgroundColor: "transparent",
              color: "#1D387E",
              border: "2px solid #1D387E",
            }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          <p className="heading-text">Pressed</p>
          <AiOutlineArrowDown size={28} />
        </div>
        <div>
          <button className="pressed-button">
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>

        <div>
          <button
            className="pressed-button"
            style={{ backgroundColor: "#CAD9FF" }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>

        <div>
          <button
            className="pressed-button"
            style={{ backgroundColor: "#BFD0FD" }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>
        <div>
          <button
            className="pressed-button"
            style={{
              backgroundColor: "transparent",
              color: "#1D387E",
              border: "2px solid #1D387E",
            }}
          >
            <AiOutlinePlus className="icon" /> Extended FAB
          </button>
        </div>
      </div>
    </div>
  );
};
