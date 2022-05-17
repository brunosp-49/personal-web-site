import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import {MainContainer, Part1, Part2, Part3, DivUp, DivDown} from "./IndexStyle"
import pinkCircle from "../../img/pinkCircle.png"
import ceanoCircle from "../../img/ceanoCircle.png"
import ceanoCircle2 from "../../img/ceanoCircle2.png"
import { Link } from "react-router-dom";

function Index(){
    const [state, setState] = useState()
    const [tittle, SetTittle] =useState()
    const [sub, SetSub] =useState()

    const onEnter = (e) => {
        renderInfo(e.target.id)
    }

    const onLeave = () =>{
        SetTittle()
        SetSub()
    }

    const renderInfo = (id) =>{
        switch(id){
            case "react":
                SetTittle("REACT.JS")
                SetSub("Hooks, material UI, Bootstrap, router, etc...")
            break;
            case "js":
                SetTittle("JavaScript")
                SetSub("Async, await, callback, promises, etc...")
            break;
            case "css":
                SetTittle("CSS 3")
                SetSub("Styled-components, responsiveness, clean code.")
            break;
            case "html":
                SetTittle("HTML 5")
                SetSub("Clean structure, Good practices and accessibility")
            break;
        }
    }


    function downFunction() {
        window.scrollTo({ 
            top: document.documentElement.scrollHeight, 
            behavior: 'smooth'
          }); 
    }

    function vai(){
        alert("oii")
    }

    return(
        <div>
            <Header/>
            <MainContainer>
                <Part1>
                    <DivUp>
                        <img src={pinkCircle} alt="Bruno logo"></img>
                    </DivUp>
                    <DivDown>
                        <Link to="/portifolio" className="link">
                            <img className="normal" src={ceanoCircle} alt="portifolio" />
                            <img className="hover" src={ceanoCircle2} alt="portifolio" />
                        </Link>
                    </DivDown>
                </Part1>
                <Part2>
                    <i className="devicon-react-original" id="react" onMouseEnter={downFunction()} onMouseLeave={onLeave} onMouseOver={onEnter}></i>
                    <i className="devicon-javascript-plain" id="js" onMouseEnter={onEnter} onMouseLeave={onLeave}></i>
                    <i className="devicon-css3-plain-wordmark" id="css" onMouseEnter={onEnter} onMouseLeave={onLeave}></i>
                    <i className="devicon-html5-plain-wordmark" id="html" onMouseEnter={onEnter} onMouseLeave={onLeave}></i>
                </Part2>
                <Part3>
                    <h2>{tittle}</h2>
                    <p className="typing-slider">{sub}</p>
                </Part3>
            </MainContainer>
        </div>
    )
}

export default Index;