import React from "react";
import Header from "../../Components/Header/Header";
import { MainContainer, Part1, Part2, Part3 } from "./AboutStyle";
import img from "../../img/bno.png";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <MainContainer>
      <Header />
      <Part1>
        <div className="left">
          <img src={img} alt="bruno siqueira" className="inicial" />
        </div>
        <div className="right incial">
          <div className="container">
            <div className="foi" />
          </div>
        </div>
        <a href="#2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            className="sgg"
          >
            <path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z" />
          </svg>
        </a>
      </Part1>
      <Part2 id="2">
        <p>
          I'm a Full Stack Developer, working as a Tech Lead/Frontend Developer
          at Condofy, studying Software Engineering at Brigham Young University.
        </p>
      </Part2>
      <Part3>
        <div className="up">
          <button>SKILLS</button>
        </div>
        <div className="down">
          <i className="devicon-react-original colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-github-original original"></i>
          <i className="devicon-materialui-plain colored"></i>
          <i className="devicon-photoshop-plain colored"></i>
          <i className="devicon-redux-original"></i>
        </div>
      </Part3>
      <Footer />
    </MainContainer>
  );
}

export default About;
