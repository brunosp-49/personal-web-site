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
          <div class="container">
            <div class="foi" />
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
          My name is Bruno, I'm passionate about technology, I work as a
          front-end developer, and I'm on my way to becoming a FullStack, I'm
          also currently studying applied technology course at BYU university.
        </p>
      </Part2>
      <Part3>
        <button>Skills</button>
      </Part3>
      <Part4></Part4>
      <Part5></Part5>
    </MainContainer>
  );
}

export default About;
