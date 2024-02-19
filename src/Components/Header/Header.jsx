import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useColor } from "../../Global/globalState";
import Logo from "../../img/logo2.png";
import {
  About,
  Contact,
  Index,
  MenuContainer,
  Portifolio,
  MainContainer,
  Social,
  MainContainerMobile,
  MainContainerMobileOut,
} from "./HeaderStyled";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ClearIcon from "@mui/icons-material/Clear";

function Header() {
  const { color, setColor } = useColor();
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const onSelector = (id) => {
    switch (id) {
      case "index":
        setColor({
          home: "#fff",
          portfolio: "#E91472",
          about: "#2291EB",
          contact: "#A72D84",
          social: "#01B9E6",
        });
        break;
      case "portfolio":
        setColor({
          home: "#3EEBE7",
          portfolio: "#fff",
          about: "#2291EB",
          contact: "#A72D84",
          social: "#01B9E6",
        });
        break;
      case "about":
        setColor({
          home: "#3EEBE7",
          portfolio: "#E91472",
          about: "#fff",
          contact: "#A72D84",
          social: "#01B9E6",
        });
        break;
      case "contact":
        setColor({
          home: "#3EEBE7",
          portfolio: "#E91472",
          about: "#2291EB",
          contact: "#fff",
          social: "#01B9E6",
        });
        break;
      case "social":
        setColor({
          home: "#3EEBE7",
          portfolio: "#E91472",
          about: "#2291EB",
          contact: "#A72D84",
          social: "#fff",
        });
        break;
      default:
        break;
    }
  };
  const mobileMenu = () => {
    setIsOpenMobile(!isOpenMobile);
  };
  return (
    <>
      <MainContainer>
        <img src={Logo} alt="logotipo" />
        <MenuContainer>
          <Index color={`${color.home}`}>
            <Link to="/" onClick={() => onSelector("index")}>
              HOME
            </Link>
          </Index>
          <Portifolio color={`${color.portfolio}`}>
            <Link to="/portifolio" onClick={() => onSelector("portfolio")}>
              PORTFOLIO
            </Link>
          </Portifolio>
          <About color={`${color.about}`}>
            <Link to="/about" onClick={() => onSelector("about")}>
              ABOUT
            </Link>
          </About>
          <Contact color={`${color.contact}`}>
            <Link to="/contact" onClick={() => onSelector("contact")}>
              CONTACT
            </Link>
          </Contact>
          <Social color={`${color.social}`}>
            <Link to="/social" onClick={() => onSelector("social")}>
              SOCIAL
            </Link>
          </Social>
        </MenuContainer>
      </MainContainer>
      <MainContainerMobileOut>
        <div className="container">
          <DensityMediumIcon onClick={() => mobileMenu()} />
        </div>
      </MainContainerMobileOut>
      {isOpenMobile && (
        <MainContainerMobile>
          <div className="menu">
            <div className="sub-menu">
              <ClearIcon onClick={() => mobileMenu()} />
              <Link to="/">
                <p>HOME</p>
              </Link>
              <Link to="/portifolio">
                <p>PORTFOLIO</p>
              </Link>
              <Link to="/about">
                <p>ABOUT</p>
              </Link>
              <Link to="/contact">
                <p>CONTACT</p>
              </Link>
              <Link to="/social">
                <p>SOCIAL</p>
              </Link>
            </div>
          </div>
        </MainContainerMobile>
      )}
    </>
  );
}

export default Header;
