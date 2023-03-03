import Aos from "aos";
import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
