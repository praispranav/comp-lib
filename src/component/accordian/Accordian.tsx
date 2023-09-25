import { FC, useState } from "react";

import "./style.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

export const Accordian = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main-container">
        <div className="heading">
          <p>With label</p>
          <AiOutlineArrowDown size={28} />
        </div>
        <div className="flex-between">
          <div style={{ width: "45%" }}>
            <p>Label</p>
            <div className="accordion">
              <div className="accordion-header" onClick={toggleAccordion}>
                <p>Selected Option</p>
                <span>{isOpen ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}</span>
              </div>
              {isOpen && <div className="accordion-content">yvjhvkbj</div>}
            </div>
          </div>
          <div style={{ width: "45%" }}>
            <p>Label</p>
            <div className="accordion">
              <div className="accordion-header" onClick={toggleAccordion}>
                <p>Selected Option</p>
                <span>{isOpen ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span>
              </div>
           
            </div>

            <div className="    ">
                <p>Option</p>
                <p>Option</p>
                <p>Option</p>
                <p>Option</p>

              </div>
          </div>{" "}
        </div>
      </div>


      <div className="main-container">
        <div className="heading">
          <p>Without label</p>
          <AiOutlineArrowDown size={28} />
        </div>
        <div className="flex-between">
          <div style={{ width: "45%" }}>
        
            <div className="accordion">
              <div className="accordion-header" onClick={toggleAccordion}>
                <p>Selected Option</p>
                <span>{isOpen ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}</span>
              </div>
              {isOpen && <div className="accordion-content">yvjhvkbj</div>}
            </div>
          </div>
          <div style={{ width: "45%" }}>
        
            <div className="accordion">
              <div className="accordion-header" onClick={toggleAccordion}>
                <p>Selected Option</p>
                <span>{isOpen ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span>
              </div>
           
            </div>

            <div className="content">
                <p>Option</p>
                <p>Option</p>
                <p>Option</p>
                <p>Option</p>

              </div>
          </div>{" "}
        </div>
      </div>
      <div className="main-container">
        <div className="heading">
          <p>Accordion List</p>
          <AiOutlineArrowDown size={28} />
        </div>
        <div className="flex">
         
          <div style={{ width: "45%" }}>
        
         

            <div className="content">
                <p>Option</p>
                <p>Option</p>
                <p>Option</p>
                <p>Option</p>

              </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
