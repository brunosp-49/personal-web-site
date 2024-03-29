import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import {
  MainContainer,
  Part1,
  Part2,
  Part3,
  DivUp,
  DivDown,
} from "./IndexStyle";
import pinkCircle from "../../img/pinkCircle.png";
import { Link } from "react-router-dom";
import originals from "../../img/2.png";
import html from "../../img/5.png";
import css from "../../img/6.png";
import js from "../../img/3.png";
import ts from "../../img/4.png";
import react from "../../img/1.png";
import { useColor } from "../../Global/globalState";

function Index() {
  const [imageSelected, setImageSelected] = useState(originals);
  const [tittle, SetTittle] = useState("|");
  const { setColor } = useColor();
  const changePortfolio = () => {
    setColor({
      home: "#3EEBE7",
      portfolio: "#fff",
      about: "#2291EB",
      contact: "#A72D84",
      social: "#01B9E6",
    });
  };

  const onEnter = (e) => {
    renderInfo(e.target.id);
  };

  const onLeave = () => {
    SetTittle("|");
    setImageSelected(originals);
  };

  const renderInfo = (id) => {
    switch (id) {
      case "react":
        SetTittle("REACT.JS");
        setImageSelected(react);
        break;
      case "js":
        SetTittle("JavaScript");
        setImageSelected(js);
        break;
      case "css":
        SetTittle("CSS 3");
        setImageSelected(css);
        break;
      case "html":
        SetTittle("HTML 5");
        setImageSelected(html);
        break;
      case "ts":
        SetTittle("TypeScript");
        setImageSelected(ts);
        break;
      default:
        break;
    }
  };

  const downFunction = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />
      <MainContainer>
        <Part1>
          <DivUp>
            <img src={pinkCircle} alt="Bruno logo"></img>
          </DivUp>
          <DivDown>
            <Link
              to="/portifolio"
              className="link"
              onClick={() => changePortfolio()}
            >
              <button className="normal">PORTFOLIO</button>
            </Link>
          </DivDown>
        </Part1>
        <Part2>
          <i
            className="devicon-react-original"
            id="react"
            onMouseEnter={() => downFunction()}
            onMouseLeave={onLeave}
            onMouseOver={onEnter}
          ></i>
          <i
            className="devicon-javascript-plain"
            id="js"
            onMouseEnter={() => downFunction()}
            onMouseLeave={onLeave}
            onMouseOver={onEnter}
          ></i>
          <i
            className="devicon-typescript-plain"
            id="ts"
            onMouseEnter={() => downFunction()}
            onMouseLeave={onLeave}
            onMouseOver={onEnter}
          ></i>
          <i
            className="devicon-html5-plain-wordmark"
            id="html"
            onMouseEnter={() => downFunction()}
            onMouseLeave={onLeave}
            onMouseOver={onEnter}
          ></i>
          <i
            className="devicon-css3-plain-wordmark"
            id="css"
            onMouseEnter={() => downFunction()}
            onMouseLeave={onLeave}
            onMouseOver={onEnter}
          ></i>
        </Part2>
        <Part3 background={`${imageSelected}`}>
          <img src={imageSelected} alt="background" />
          <div className="typing-container">
            <h2 className="typing">{tittle}</h2>
          </div>
        </Part3>
      </MainContainer>
    </div>
  );
}

export default Index;
