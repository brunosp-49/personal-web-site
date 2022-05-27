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