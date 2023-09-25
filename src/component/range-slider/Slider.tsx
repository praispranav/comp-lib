import { FC, useState } from "react";
import { AiOutlineArrowDown, AiOutlinePlus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

import "./style.css";

export const Slider = () => {
  const [sliderValue, setSliderValue] = useState(90); // Initial value for the slider

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };
  return ( 
    <>
    <div>
    <div className="range-slider">
  
      <input
        type="range"
        id="slider"
        value={sliderValue}
        min={0}
        max={100}
        step={1}
        onChange={handleSliderChange}
      />
  
    </div>
    </div>
    </>
   );
};
