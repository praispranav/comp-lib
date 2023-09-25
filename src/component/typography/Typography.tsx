import { FC, useState } from "react";
import { AiOutlineArrowDown, AiOutlinePlus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

import "./style.css";

export const Typography = () => {
  return (
    <>
      <div>
        <div className="containers">
          <div>
            <p className="title">Display / large</p>
            <h1>Heading 1</h1>
          </div>
          <div>
            <p className="title">Display / medium</p>
            <h2>Heading 2</h2>
          </div>
          <div>
            <p className="title">Display / small</p>
            <h3>Heading 3</h3>
          </div>
          <div>
            <p className="title">Heading / large</p>
            <h4>Heading 4</h4>
          </div>

          <div>
            <p className="title">Heading / medium</p>
            <h5>Heading 5</h5>
          </div>
          <div>
            <p className="title">Heading / small</p>
            <h6>Heading 6</h6>
          </div>
          <div>
            <p className="title">Title / large</p>
            <p style={{fontSize:22,}}>Title 1</p>
          </div>
          <div>
            <p className="title">Title / medium</p>
            <p style={{fontSize:18}}>Title 2</p>
          </div>
          <div>
            <p className="title">Title / small</p>
            <p style={{fontSize:14}}>Title 3</p>
          </div>
          <div>
            <p className="title">Label / large</p>
            <p style={{fontSize:14}}>Label 1</p>
          </div>
          <div>
            <p className="title">Label / medium</p>
            <p style={{fontSize:12}}>Label 2</p>
          </div>
          <div>
            <p className="title">Label / small</p>
            <p style={{fontSize:11}}>Label 3</p>
          </div>

          <div>
            <p className="title">Body / large</p>
            <p style={{fontSize:16}}>Body 1</p>
          </div>

          <div>
            <p className="title">Body / medium</p>
            <p style={{fontSize:14}}>Label 3</p>
          </div>

          <div>
            <p className="title">Body / small</p>
            <p style={{fontSize:12}}>Label 3</p>
          </div>
        </div>
      </div>
    </>
  );
};
