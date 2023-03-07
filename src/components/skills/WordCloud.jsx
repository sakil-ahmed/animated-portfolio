import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let optionRadius;
  if (windowWidth >= 740) {
    optionRadius = 300;
  } else {
    optionRadius = 150;
  }

  const container = ".content";

  const texts = [
    "ReactJS",
    "ReactQuery",
    "Redux",
    "HTML5",
    "CSS3",
    "JavaScript",
    "SCSS",
    "NextJs",
    "Git",
    "GitHub",
    "TailwindCss",
    "BootStrap",
    "Webflow",
    "GatsbyJs",
    "GraphQL",
  ];
  const options = {
    radius: optionRadius,

    maxSpeed: "fast",
    initSpeed: "fast",

    itenClass: "sdsd",

    keep: true,
  };

  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options);
      setLoad(false);
    }
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  );
};

export default WordCloud;
