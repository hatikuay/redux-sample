import "./App.css";
import React from 'react';
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import ScreenC from "./ScreenC";
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route index path="/" element={<ScreenA></ScreenA>}></Route>
      <Route path="b/" element={<ScreenB></ScreenB>}></Route>
      <Route path="c/:userid" element={<ScreenC message="This is Screen C"></ScreenC>}></Route>
    </Routes>

  );
}

export default App;

