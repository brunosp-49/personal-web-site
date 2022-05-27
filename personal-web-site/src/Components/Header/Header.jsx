import React from "react";
import { Link } from "react-router-dom";
import { useColor } from "../../Global/globalState";
import Logo from "../../img/logo2.png"
import {About, Contact, Index, MenuContainer, Portifolio, MainContainer, Social} from "./HeaderStyled"


function Header(){
    const {color, setColor} = useColor()
    const onSelector = (id) =>{
        switch (id) {
            case "index":
                setColor({        
                    home: "#fff",
                    portfolio: "#E91472",
                    about: "#2291EB",
                    contact: "#A72D84",
                    social: "#01B9E6"})
                break;
            case "portfolio":
                setColor({        
                    home: "#3EEBE7",
                    portfolio: "#fff",
                    about: "#2291EB",
                    contact: "#A72D84",
                    social: "#01B9E6"})
                break;
            case "about":
                setColor({        
                    home: "#3EEBE7",
                    portfolio: "#E91472",
                    about: "#fff",
                    contact: "#A72D84",
                    social: "#01B9E6"})
                break;
            case "contact":
                setColor({        
                    home: "#3EEBE7",
                    portfolio: "#E91472",
                    about: "#2291EB",
                    contact: "#fff",
                    social: "#01B9E6"})
                break;
            case "social":
                setColor({        
                    home: "#3EEBE7",
                    portfolio: "#E91472",
                    about: "#2291EB",
                    contact: "#A72D84",
                    social: "#fff"})
                break;
            default:
                break;
        }
    }
    return(
        <MainContainer>
            <img src={Logo} alt="logotipo"/>
            <MenuContainer>
                <Index color={`${color.home}`}><Link to="/" onClick={()=>onSelector("index")}>HOME</Link></Index>
                <Portifolio color={`${color.portfolio}`}><Link to="/portifolio" onClick={()=>onSelector("portfolio")}>PORTFOLIO</Link></Portifolio>
                <About color={`${color.about}`}><Link to="/about" onClick={()=>onSelector("about")}>ABOUT</Link></About>
                <Contact color={`${color.contact}`}><Link to="/contact" onClick={()=>onSelector("contact")}>CONTACT</Link></Contact>
                <Social color={`${color.social}`}><Link to="/social" onClick={()=>onSelector("social")}>SOCIAL</Link></Social>
            </MenuContainer>
        </MainContainer>
    )
}

export default Header;