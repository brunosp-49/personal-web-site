import styled from "styled-components"
import gymIco from "../../img/gymico.png"
import gitIco from "../../img/gitico.png"
import eatIco from "../../img/eatsico.png"

export const MainContainer = styled.div`
`
export const Part1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
background-image: url(${props => props.background});
background-position: top;
background-size: cover;
.more{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 4;
  a{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 10vw;
    height: 5vw;
    text-decoration: none;
    @media screen and (max-width: 600px){
      width: 30vw;
    }
  }
  button{
    width: 10vw;
    height: 4.5vw;
    border: 0;
    border-radius: 2vw;
    background-color: #01b9e6;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 1.5vw;
    @media screen and (max-width: 600px) {
      width: 25vw;
      height: 8vw;
      border-radius: 4vw;
      font-size: 4vw;
    }
    :hover{
      opacity: 0.8;
      cursor: pointer;
    }
  }
}

.inicial{
  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  
  @-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
}

.up{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
    @media screen and (max-width: 600px){
     height: 50%;
    }
    button{
        background-color: #E91472;
        width: 30vw;
        height: 10vw;
        border: 0;
        border-radius: 4.2vw;
        color: #fff;
        font-size: 4.5vw;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
        @media screen and (max-width: 600px){
          width: 60vw;
          height: 18vw;
          font-size: 8vw;
          border-radius: 8vw;
        }
    }
}
.down{
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 40%;
  @media screen and (max-width: 600px){
    height: 50%;
  }
}

      /* The container <div> - needed to position the dropup content */
      .dropup {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #ffe600;
        border-radius: 1vw;
        width: 8vw;
        justify-self: center;
        @media screen and (max-width: 600px){
          width: 25vw;
          height: 25vw;
        }
        :hover{
          border: 0;
        }
      }

      .dropbtn {
        background-image: url(${gymIco});
        background-size: cover;
        border-radius: 1vw;
        color: black;
        border: 0;
        border-radius: 1vw;
        height: 8vw;
        width: 8vw;

        text-align:center;
        z-index: 2;
        @media screen and (max-width: 600px){
          height: 25vw;
          width: 25vw;
        }
      }
 
      /* Dropup content (Hidden by Default) */
      .dropup-content {
          height: 8vw;
          width: 8vw;
        display: none;
        position: absolute;
        background-color: #202020;
        border-radius: 1vw;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        @media screen and (max-width: 600px){
          height: 25vw;
          width: 25vw;
        }
      }

      /* Links inside the dropup */
      .dropup-content a {
        color: black;
        font-size: 1.5vw;
        padding: 1vh 1vh;
        text-decoration: none;
        display: block;
        text-align: center;
        background-color: #ffe600;
        border-radius: 1vw;
        @media screen and (max-width: 600px){
          font-size: 5vw;
          padding: 0;
        }
      }

      /* Change color of dropup links on hover */
      .dropup-content a:hover {
        background-color: #ddd;
        border-radius: 1vw;
      }

      /* Show the dropup menu on hover */
      .dropup:hover .dropup-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 3;
      }

      .dropup1 {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #67fa67;
        border-radius: 1vw;
        width: 8vw;
        justify-self: center;
        @media screen and (max-width: 600px){
          width: 25vw;
          height: 25vw;
        }
        :hover{
          border: 0;
        }
      }

      .dropbtn1 {
        background-image: url(${eatIco});
        background-size: cover;
        border-radius: 1vw;
        color: black;
        border: 0;
        border-radius: 1vw;
        height: 8vw;
        width: 8vw;

        text-align:center;
        z-index: 2;
        @media screen and (max-width: 600px){
          height: 25vw;
          width: 25vw;
        }
      }
 
      /* Dropup content (Hidden by Default) */
      .dropup-content1 {
          height: 8vw;
          width: 8vw;
        display: none;
        position: absolute;
        background-color: #202020;
        border-radius: 1vw;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        @media screen and (max-width: 600px){
          height: 25vw;
          width: 25vw;
        }
      }

      /* Links inside the dropup */
      .dropup-content1 a {
        color: black;
        font-size: 1.5vw;
        padding: 1vh 1vh;
        text-decoration: none;
        display: block;
        text-align: center;
        background-color: #67fa67;
        border-radius: 1vw;
        @media screen and (max-width: 600px){
          font-size: 5vw;
          padding: 0;
        }
      }

      /* Change color of dropup links on hover */
      .dropup-content1 a:hover {
        background-color: #ddd;
        border-radius: 1vw;
      }

      /* Show the dropup menu on hover */
      .dropup1:hover .dropup-content1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 3;
      }

      .dropup2 {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #fff;
        border-radius: 1vw;
        width: 8vw;
        justify-self: center;
        @media screen and (max-width: 600px){
          width: 25vw;
          height: 25vw;
        }
        :hover{
          border: 0;
        }
      }

      .dropbtn2 {
        background-image: url(${gitIco});
        background-size: cover;
        border-radius: 1vw;
        color: black;
        border: 0;
        border-radius: 1vw;
        height: 8vw;
        width: 8vw;

        text-align:center;
        z-index: 2;
        @media screen and (max-width: 600px){
          height: 25vw;
          width: 25vw;
        }
      }
 
      /* Dropup content (Hidden by Default) */
      .dropup-content2 {
          height: 8vw;
          width: 8vw;
        display: none;
        position: absolute;
        background-color: #202020;
        border-radius: 1vw;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        @media screen and (max-width: 600px){
          height: 25vw;
          width: 25vw;
        }
      }

      /* Links inside the dropup */
      .dropup-content2 a {
        color: black;
        font-size: 1.5vw;
        padding: 1vh 1vh;
        text-decoration: none;
        display: block;
        text-align: center;
        background-color: #fff;
        border-radius: 1vw;
        @media screen and (max-width: 600px){
          font-size: 5vw;
          padding: 0;
        }
      }

      /* Change color of dropup links on hover */
      .dropup-content2 a:hover {
        background-color: #ddd;
        border-radius: 1vw;
      }

      /* Show the dropup menu on hover */
      .dropup2:hover .dropup-content2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 3;
      }
`
export const Part2 = styled.div`
height: 30vh;
background-color: #0A0712;
`
// export const MainContainer = styled.div`
// `
// export const MainContainer = styled.div`
// `