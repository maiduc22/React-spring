import React from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { Loading } from "./components/loading";
import { MyBox } from "./components/useTransition";
import { BrowserRouter } from "react-router-dom";
import { SlideImage } from "./components/slideImages";

function App() {
  return (
    <BrowserRouter>
      {/* <Loading></Loading> */}
      <div style={{ display: "flex" }}>
        <MyBox></MyBox>
        <SlideImage></SlideImage>
      </div>
    </BrowserRouter>
  );
}
export default App;
