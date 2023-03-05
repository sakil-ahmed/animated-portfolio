import Aos from "aos";
import React, { useEffect } from "react";
import "./App.scss";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      ,
    </div>
  );
}

export default App;
