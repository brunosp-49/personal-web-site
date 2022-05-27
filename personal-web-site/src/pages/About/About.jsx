import React from "react";
import Header from "../../Components/Header/Header";
import { MainContainer, Part1, Part2, Part3, Part4, Part5 } from "./AboutStyle";
import img from "../../img/bno.png";

function About() {
  return (
    <MainContainer>
      <Header />
      <Part1>
        <div className="left">
          <img src={img} alt="bruno siqueira" />
        </div>
        <div className="right">
          <div className="container">
            <div className="foi" />
          </div>
        </div>
        <a href="#2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="sgg"
          >
            <path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z" />
          </svg>
        </a>
      </Part1>
      <Part2 id="2">
        <p>
          I'm a Front-End developer, currently working as a trainee at Givisiez,
          using React.js, JavaScript, CSS, HTML, currently studying to become a
          FullStack developer, which is my professional goal, and that's why I
          study applied technology at Brigham Young University, in order to
          continue improving my knowledge and also learning more languages to
          become a more complete professional.
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
          <i class="devicon-git-plain colored"></i>
          <i class="devicon-github-original original"></i>
          <i class="devicon-materialui-plain colored"></i>
          <i class="devicon-photoshop-plain colored"></i>
          <i class="devicon-redux-original"></i>
        </div>
      </Part3>
      <Part4></Part4>
      <Part5></Part5>
    </MainContainer>
  );
}

export default About;
