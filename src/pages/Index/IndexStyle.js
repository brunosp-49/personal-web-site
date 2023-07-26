import styled from "styled-components"
import Imagebg from "../../img/indexbg.png"


export const MainContainer = styled.div`
height: 100%;
`

export const Part1 = styled.div`
background-image: url(${Imagebg});
background-size: cover;
height: 100vh;
`
export const Part2 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
align-items: center;
height: 50vh;
background-color: #f5f5f5;
font-size: 9vw;
color: #264DE4;
@media screen and (max-width: 600px) {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  font-size: 14vw;
  height: 60vh;
}
#react{
  justify-self: center;
:hover{
    color: #61dafb;
    cursor: pointer;
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
}
#js{
  justify-self: center;
    :hover{
    color: #f0db4f;
    cursor: pointer;
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
}
#css{
  justify-self: center;
    :hover{
    color: #1572b6;
    cursor: pointer;
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
}
#ts{
  justify-self: center;
    :hover{
    color: #1572b6;
    cursor: pointer;
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
}
#html{
  justify-self: center;
    :hover{
    color: #e54d26;
    cursor: pointer;
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
}
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
}


`
export const Part3 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: center;
background-color: #0A0712;
background-size: cover;
height: 50vh;
width: 100%;
font-family: 'Segoe UI', sans-serif;
@media screen and (max-width: 600px) {
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 1fr;
  height: 40vh;
}
img{
  height: 48vh;
  width: 48vh;
  @media screen and (max-width: 600px) {
  height: 30vw;
  width: 30vw;
  justify-self: center;
}
}
h2{
    color: aqua;
    font-weight: 800;
    font-size: 4vw;
    width: fit-content;
}
p{
    color: #fff;
    font-weight: 800;
    font-size: 2.5vw;
}
.typing {
  position: absolute;
	&::after {
    content: "|";
    position: absolute;
    right: 0;
    width: 100%;
    color: #a72d84;
    background: #0A0712;
    animation: typing 4s infinite alternate,
      caret 1s alternate;
  }
}
.typing-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
// Animation
@keyframes typing {
	to { width: 0 }
}
@keyframes caret {
	50% { color: transparent }
}
`

export const DivUp = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
height: 70%;
width: 90%;
pointer-events: none;
animation: go-right 1.5s;
@media screen and (max-width: 600px) {
  height: 50%;
  justify-content: center;
}
img{
    height: 19.5vw;
    @media screen and (max-width: 600px) {
  height: 30vw;
}
}
@keyframes go-right {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
} 

`

export const DivDown = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-end;
height: 70%;
width: 88%;
text-decoration: none;
animation: go-left 1.5s;
@media screen and (max-width: 600px) {
  justify-content: center;
  height: 50%;
}
.link{
    width: 88%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
}
.normal{
    position: absolute;
    z-index: 1;
    height: 8vw;
    width: 22vw;
    margin-top: 2%;
    background-color: #1bffff;
    border-radius: 4vw;
    border: 0;
    margin-right: 0.25vw;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 2.8vw;
    color: #17296A;
    cursor: pointer;
    @media screen and (max-width: 600px) {
      height: 16vw;
      width: 40vw;
      border-radius: 8vw;
      font-size: 5.7vw;
      margin-top: 8%;
    }
    :hover{
      background-color: #72ffff;
      color: #364783;
    }
}

@keyframes go-left {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
} 
`


// export const DivUp = styled.div`
// `

// export const DivUp = styled.div`
// `