import React, { useEffect, useState } from "react";
import "./App.scss";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { BsArrowUpShort } from "react-icons/bs";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showClass = scrollPosition >= 300 ? "show__link" : "";

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <a
        className={`top__link ${showClass} animate__animated animate__animated`}
        href={"#header"}
      >
        <BsArrowUpShort />
      </a>
    </div>
  );
}

export default App;
