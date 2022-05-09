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
display: flex;
align-items: center;
justify-content: space-around;
height: 50vh;
background-color: #f5f5f5;
font-size: 20vmin;
color: #264DE4;
#react{
:hover{
    color: #61dafb;
    font-size: 20.5vmin;
}
}
#js{
    :hover{
    color: #f0db4f;
    font-size: 20.5vmin;
}
}
#css{
    :hover{
    color: #1572b6;
    font-size: 20.5vmin;
}
}
#html{
    :hover{
    color: #e54d26;
    font-size: 20.5vmin;
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
font-size: 2vw;
font-weight: 400;
font-family: 'Segoe UI', sans-serif;
h2{
    color: #61dafb;
}
p{
    color: #fff;
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