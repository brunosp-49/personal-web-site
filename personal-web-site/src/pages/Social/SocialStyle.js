import styled from "styled-components"
import img from "../../img/social.png"

export const MainContainer = styled.div`
`
export const Part1 = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-image: url(${img});
background-size: cover;
padding: 0 15%;
svg{
    height: 80%;
    :hover{
        cursor: pointer;
    }
}
`
export const Part2 = styled.div`
height: 10vh;
background-color: #0A0712;
`
export const Top = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
height: 40%;
font-family: 'Open Sans', sans-serif;
font-weight: 800;
P{
    color: #FFF;
    font-size: 6vw;
    background-color: #e91472;
    border-radius: 10vw;
    width:  30vw;
    text-align: center;
    margin: 0;
}
.tracking-in-expand {
	-webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
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
`
export const Mid = styled.div`
height: 30%;
`
export const Bottom = styled.div`
display: flex;
justify-content: space-between;
height: 30%;
width: 100%;
.rotate-center1 {
    background-color: #fff;
    border-radius: 1vw;
    fill: #131313;
    :hover{
	-webkit-animation: rotate-center 0.6s ease-in-out both;
	        animation: rotate-center 0.6s ease-in-out both;
          fill: #fff;
          background-color: #131313;
        }
}
.rotate-center2 {
    fill: #fff;
    :hover{
	-webkit-animation: rotate-center 0.6s ease-in-out both;
	        animation: rotate-center 0.6s ease-in-out both;
          fill: #2291eb;
        }
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
`
// export const MainContainer = styled.div`
// `
// export const MainContainer = styled.div`
// `
// export const MainContainer = styled.div`
// `