import React from "react";
import Header from "../../Components/Header/Header";
import { MainContainer, Part1, Part2, Part3, Part4 } from "./AboutStyle";
import img from "../../img/bno.png";
import perfil from "../../img/perfil.png";
import back from "../../img/back.jpg";
import arrow from "../../img/arrow.webp"

function About() {
  return (
    <MainContainer>
      <Header />
      <Part1>
        <div className="left">
          <img src={img} alt="bruno siqueira" />
        </div>
        <div className="right">
          <div className="sub"></div>
          <div class="container">
            <div class="foi"/>
          </div>
        </div>
      </Part1>
      <img src={arrow} alt="arrow"/>
      <Part2></Part2>
      <Part3></Part3>
      <Part4></Part4>
    </MainContainer>
  );
}

export default About;
