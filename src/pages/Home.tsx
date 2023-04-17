import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Marque from "../components/marque/Marque";
import Project from "../components/project/Project";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Marque />
      <Skills />
      {/* <Services /> */}
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
