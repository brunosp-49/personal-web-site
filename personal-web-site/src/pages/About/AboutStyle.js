import styled from "styled-components"
import background1 from "../../img/about.png"
import back from "../../img/back.jpg"
import perfil from "../../img/perfil.png";

export const MainContainer = styled.div`
`

export const Part1 = styled.div`
    display: flex;
    height: 80vh;
    padding-top: 10vh;
    background-image: url(${background1});
    background-size: cover;
    z-index: 3;
    .left{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 50%;
        img{
            width: 70%;
        }
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 50%;
        .container {
        border: 3px solid #fff;
        position: absolute;
        background-image: url(${back});
        background-position:center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        -webkit-tap-highlight-color: transparent;
        transform: scale(0.48);
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        width: 45vw;
        height: 45vw;
        z-index: 3;
        }
        .container:hover {
        transform: scale(0.54);
        }
        .img {
        width: 100%;
        height: 100%;
        /* background-color: green; */
        }
        .container:hover .foi {
        transform: translateY(-9vw) scale(1);
        width: 47vw;
        height: 62vw;
        border-radius: 44%;
        }
        .foi{
            background-image: url(${perfil});
            background-position: center;
            background-size: cover;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            pointer-events: none;
            transform-origin: 50% bottom;
            transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1;
        }
        .sub{
            position: absolute;
            z-index: 2;
            margin-top: 5%;
            width: 70vw;
            height: 55vw;
            border-radius: 50%;
            -webkit-tap-highlight-color: transparent;
            transform: scale(0.48);
            transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    }
`

export const Part2 = styled.div`
`

export const Part3 = styled.div`
`

export const Part4 = styled.div`
`

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `