import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
z-index: 2;
top: 0;
height: 16vh;
width: 100%;
font-family: 'Open Sans', sans-serif;
font-weight: 800;
background-color: rgba(10,7,18,0.71);
@media screen and (max-width: 600px){
    display: none;
}
img{
    height: 80%;
    margin-left: 2%;
}
`

export const MenuContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 80%;
a{
    text-decoration: none;
    font-size: 2.2vw
    
}
a:hover{
    /* font-size: 2.25vw; */
    color: white;
}
`
export const Index = styled.div`
a{
    color: ${props => props.color};
}
`
export const Portifolio = styled.div`
a{
    color: ${props => props.color};
}
`
export const About = styled.div`
a{
    color:${props => props.color};
}
`
export const Contact = styled.div`
a{
    color: ${props => props.color};
}
`
export const Social = styled.div`
a{
    color: ${props => props.color};
}
`

export const MainContainerMobile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
z-index: 4;
top: 0;
height: 12vh;
width: 100%;
font-family: 'Open Sans', sans-serif;
font-weight: 800;
animation: go-right 0.8s;
@media screen and (min-width: 600px){
    display: none;
}
@keyframes go-right {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
} 
svg{
    font-size: 12vw;
    color: #e91672;
}
.container{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    height: 100%;
}
.menu{
    position: fixed;
    z-index: 4;
    top: 0;
    right: 0;
    display: flex;
    align-items: flex-start;
    text-align: center;
    width: 80%;
    height: 100vh;
    background-color: #0D0E25;
    border-bottom-left-radius: 2vw;
    border-top-left-radius: 2vw;
    svg{
        font-size: 12vw;
        color: #0a0712;
        align-self: flex-start;
        justify-self: flex-end;
        margin: 4vw 4vw 0 0;
    }
    p{
        font-size: 7vw;
        color: #01B9E6;
    }
}
.sub-menu{
    z-index: 4;
    display: grid;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 80%;
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 1fr 1fr 1fr 1fr 1fr;
    a{
        text-decoration: none;
        z-index: 4;
    }
    svg{
        color: #E91472;
    }
}
`

export const MainContainerMobileOut = styled.div`
display: none;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
z-index: 4;
top: 0;
height: 12vh;
width: 100%;
font-family: 'Open Sans', sans-serif;
font-weight: 800;
background-color: rgba(10,7,18,0.71);
@media screen and (max-width: 600px){
    display: flex;
}
svg{
    font-size: 12vw;
    color: #e91672;
}
.container{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    height: 100%;
}
.menu{
    position: fixed;
    z-index: 4;
    top: 0;
    right: 0;
    display: flex;
    align-items: flex-start;
    text-align: center;
    width: 80%;
    height: 100vh;
    background-color: #0D0E25;
    border-bottom-left-radius: 2vw;
    border-top-left-radius: 2vw;
    svg{
        font-size: 12vw;
        color: #0a0712;
        align-self: flex-start;
        justify-self: flex-end;
        margin: 4vw 4vw 0 0;
    }
    p{
        font-size: 7vw;
        color: #01B9E6;
    }
}
.sub-menu{
    z-index: 4;
    display: grid;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 80%;
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 1fr 1fr 1fr 1fr 1fr;
    a{
        text-decoration: none;
        z-index: 4;
    }
    svg{
        color: #E91472;
    }
}
`