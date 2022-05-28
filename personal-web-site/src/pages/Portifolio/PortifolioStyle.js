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
    width: 10%;
    height: 45%;
  }
  button{
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 2vw;
    background-color: #01b9e6;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 1.5vw;
    :hover{
      opacity: 0.8;
      cursor: pointer;
    }
  }
}
.up{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
    button{
        background-color: #E91472;
        width: 30%;
        height: 30%;
        border: 0;
        border-radius: 4vw;
        color: #fff;
        font-size: 4.5vw;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
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
        font-size: 1.2vw;
        text-align:center;
        z-index: 2;
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
        :hover{
          border: 0;
        }
      }

      .dropbtn1 {
        background-image: url(${eatIco});
        background-size: cover;
        border-radius: 1vw;
        color: black;
        border: none;
        height: 8vw;
        width: 8vw;
        font-size: 1.2vw;
        text-align:center;
        z-index: 2;
      }
 
      /* Dropup content (Hidden by Default) */
      .dropup-content1 {
          height: 8vw;
          width: 8vw;
        display: none;
        position: absolute;
        background-color: #202020;;
        border-radius: 1vw;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
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
        :hover{
          border: 0;
        }
      }

      .dropbtn2 {
        background-image: url(${gitIco});
        background-size: cover;
        border-radius: 1vw;
        color: black;
        border: none;
        height: 8vw;
        width: 8vw;
        font-size: 1.2vw;
        text-align:center;
        z-index: 2;
      }
 
      /* Dropup content (Hidden by Default) */
      .dropup-content2 {
          height: 8vw;
          width: 8vw;
        display: none;
        position: absolute;
        background-color: #202020;;
        border-radius: 1vw;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
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
      }

      /* Change color of dropup links on hover */
      .dropup-content2 a:hover {
        background-color: #bebebe;
        border-radius: 0.8vw;
        color: #000;
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
height: 10vh;
background-color: #0A0712;
`
// export const MainContainer = styled.div`
// `
// export const MainContainer = styled.div`
// `