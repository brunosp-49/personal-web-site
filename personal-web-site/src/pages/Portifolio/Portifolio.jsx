import React from "react";
import Header from "../../Components/Header/Header";
import { MainContainer, Part1, Part2 } from "./PortifolioStyle";

function Portifolio() {
  return (
    <MainContainer>
      <Header />
      <Part1>
        <div className="up">
          <button>PORTFOLIO</button>
        </div>
      </Part1>
      <Part2></Part2>
    </MainContainer>
  );
}

export default Portifolio;
