import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { MainContainer, Part1, Part2 } from "./PortifolioStyle";
import background from "../../img/code2.png";
import future from "../../img/futureEats.png";
import getList from "../../img/gitList.png";
import gym from "../../img/gym.png";
import Footer from "../../Components/Footer/Footer";

function Portifolio() {
  const [backgrounds, setBackgrounds] = useState(background);
  const hover = (e) => {
    var elements = e.target.id;
    if (elements === "gym") {
      setBackgrounds(gym);
    } else if (elements === "food") {
      setBackgrounds(future);
    }else{
      setBackgrounds(getList)
    }
  };
  const leave = () => {
    setBackgrounds(background);
  };
  return (
    <MainContainer>
      <Header />
      <Part1 background={`${backgrounds}`}>
        <div className="up">
          <button>PORTFOLIO</button>
        </div>
        <div className="down">
          <div className="dropup" onMouseEnter={hover} onMouseLeave={leave}>
            <button className="dropbtn" id="gym"></button>
            <div className="dropup-content">
              <a href="https://projeto-academia.vercel.app/" target="_blank" rel="noreferrer">Preview</a>
              <a href="https://github.com/brunosp-49/projeto-academia" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="dropup1" onMouseEnter={hover} onMouseLeave={leave}>
            <button className="dropbtn1" id="food"></button>
            <div className="dropup-content1">
              <a href="https://future-eats-14dyyuhzp-brunosp-49.vercel.app/" target="_blank" rel="noreferrer">Preview</a>
              <a href="https://github.com/brunosp-49/Shaw-labe-food5" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="dropup2" onMouseEnter={hover} onMouseLeave={leave}>
            <button className="dropbtn2" id="git"></button>
            <div className="dropup-content2">
              <a href="http://git-list-taupe.vercel.app/" target="_blank" rel="noreferrer">Preview</a>
              <a href="https://github.com/brunosp-49/git-list" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="more">
            <a href="https://github.com/brunosp-49?tab=repositories" target="_blank" rel="noreferrer">
            <button>MORE</button>
            </a>
          </div>
        </div>
      </Part1>
      <Part2>
        <Footer/>
      </Part2>
    </MainContainer>
  );
}

export default Portifolio;
