import styled from "styled-components"
import background from "../../img/portfolio.png"

export const MainContainer = styled.div`
`
export const Part1 = styled.div`
height: 100vh;
background-image: url(${background});
background-position: center;
background-size: cover;
.up{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
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