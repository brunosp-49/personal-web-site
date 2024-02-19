import React from "react";
import { Center, MainContainer, Right } from "./FooterStyle";

export default function Footer() {
  return (
    <MainContainer>
      <Right>
        <a
          href="https://github.com/brunosp-49"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="devicon-github-original"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-siqueira-de-paulo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a
          href="mailto:brunospdev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="devicon-google-plain"></i>
        </a>
      </Right>
      <Center>
        <p>®BDEV - 2022</p>
      </Center>
    </MainContainer>
  );
}
