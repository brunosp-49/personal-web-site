import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo2.png"
import {About, Contact, Index, MenuContainer, Portifolio, MainContainer, Social} from "./HeaderStyled"


function Header(){
    
    return(
        <MainContainer>
            <img src={Logo} alt="logotipo"/>
            <MenuContainer>
                <Index><Link to="/">HOME</Link></Index>
                <Portifolio><Link to="/portifolio">PORTFOLIO</Link></Portifolio>
                <About><Link to="/about">ABOUT</Link></About>
                <Contact><Link to="/contact">CONTACT</Link></Contact>
                <Social><Link to="/social">SOCIAL</Link></Social>
            </MenuContainer>
        </MainContainer>
    )
}

export default Header;