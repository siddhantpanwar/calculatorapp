import React, { useState } from "react";
import "./Ui.css";

export const UI = (props) => {
  const [Seven, setSeven] = useState();
  const SevenOnclickhandler = () => {
    setdisplay(7);
  };

  const [Eight, setEight] = useState();
  const EightOnclickhandler = () => {
    setdisplay(8);
  };

  const [display, setdisplay] = useState();
  return (
    <section class="main">
      <div class="display-sec">
        <h1>{display}</h1>
      </div>
      <div class="section1">
        <div class="divbtn">
          <button class="btnM seven" onClick={SevenOnclickhandler}>
            7
          </button>
        </div>
        <div class="divbtn">
          <button class="btnM eight" onClick={EightOnclickhandler}>
            8
          </button>
        </div>
        <div class="divbtn">
          <button class="btnM">9</button>
        </div>
        <div class="divbtn">
          <button class="btn-symbol">x</button>
        </div>
      </div>
      <div class="section2">
        <div class="divbtn">
          <button class="btnM">4</button>
        </div>
        <div class="divbtn">
          <button class="btnM">5</button>
        </div>
        <div class="divbtn">
          <button class="btnM">6</button>
        </div>
        <div class="divbtn">
          <button class="btn-symbol">-</button>
        </div>
      </div>
      <div class="section3">
        <div class="divbtn">
          <button class="btnM">1</button>
        </div>
        <div class="divbtn">
          <button class="btnM">2</button>
        </div>
        <div class="divbtn">
          <button class="btnM">3</button>
        </div>
        <div class="divbtn">
          <button class="btn-symbol">+</button>
        </div>
      </div>
      <div class="section4">
        <div class="divbtn">
          <button class="special-0">0</button>
        </div>

        <div class="divbtn">
          <button class="btnM">C</button>
        </div>
        <div class="divbtn">
          <button class="btn-symbol">÷</button>
        </div>
      </div>
    </section>
  );
};
