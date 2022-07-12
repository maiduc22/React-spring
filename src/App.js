import React from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { Loading } from "./components/loading";
import { SideBar } from "./components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SlideImage } from "./components/slideImages";

function App() {
  return (
    <BrowserRouter>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/slideimg" element={<div>asdsa</div>} exact />
        <Route path="/loading" element={<div>Loading</div>} exact />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
