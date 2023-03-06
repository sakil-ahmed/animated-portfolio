import React from "react";
import Header from "./../components/header/Header";
import Hero from "./../components/hero/Hero";
import Marque from "./../components/marque/Marque";
import Project from "./../components/project/Project";
import Footer from "./../components/footer/Footer";
import Contact from "../components/contact/Contact";
import Services from "../components/services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Marque />
      {/* <Services /> */}
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
