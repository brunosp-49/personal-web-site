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
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
height: 50vh;
background-color: #f5f5f5;
font-size: 20vmin;
color: #264DE4;
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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #0A0712;
height: 50vh;
font-family: 'Segoe UI', sans-serif;
h2{
    color: #61dafb;
    font-weight: 800;
    font-size: 4vw;
}
p{
    color: #fff;
    font-weight: 800;
    font-size: 2.5vw;
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
img{
    height: 19.5vw;
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
    margin-top: 2%;
    :hover{
        z-index: 0;
        cursor: pointer;
    }
}
.hover{
    position: absolute;
    z-index: 0;
    height: 8vw;
    margin-top: 2%;
    :hover{
        z-index: 1;
        cursor: pointer;
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