import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { card } from "./../../public/data/CardData";
import Card from "../components/card/Card";
import "./../styles/Work.scss";

const Work = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="project__container">
          {card.map((item: any) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
