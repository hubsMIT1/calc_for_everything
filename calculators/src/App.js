import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import MainSI from './mathematical/simple_interest/MainSI';
import MainCI from './mathematical/compound_interest/MainCI';
import MainDecToBinAndBinToDec from './computer_science/DecToBinAndBinToDec/MainDecToBinAndBinToDec';
import MainHexToBinAndBinToHex from './computer_science/HexToBinAndBinToHex/MainHexToBinAndBinToHex';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* Computer Science */}
            <Route path="decbinandbindec" element={<MainDecToBinAndBinToDec />} />
            <Route path="hexbinandbinhex" element={<MainHexToBinAndBinToHex />} />
            {/* Mathematical */}
            <Route path="simpleinterest" element={<MainSI />} />
            <Route path="compoundinterest" element={<MainCI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
