import styled from "styled-components"
import background1 from "../../img/about.png"
import back from "../../img/back.jpg"
import perfil from "../../img/perfil.png";
import filter from "../../img/filter.png"

export const MainContainer = styled.div`
`

export const Part1 = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
    padding-top: 10vh;
    background-image: url(${background1});
    background-size: cover;
    z-index: 3;
    a{
        display: flex;
        position: absolute;
        align-self: flex-end;
        justify-content: center;
        align-items: center;
        width: 5vw;
        height: 5vw;
        margin-bottom: 1vw;
        animation: pop 0.5s infinite;
        :hover{
            width: 5.5vw;
            height: 5.5vw;
            animation: none;
        }
        @keyframes pop{
            from{
                width: 5vw;
                height: 5vw;
            }
            to{
                width: 5.5vw;
                height: 5.5vw;
                margin-bottom: 2vw;
            }
        }
    }
    .sgg{
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        fill: #1ddde7;
        transform: rotate(180deg);
        :hover{
            width: 6.5vw;
            height: 6.5vw;
        }
    }
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
    }
`

export const Part2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 60vh;
background-image: url(${filter});
background-position:center;
background-size: contain;
padding: 0 7vw;
p{
    text-align: center;
    font-size: 2.7vw;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #0F193A;
    :window-inactive{
    animation: go-right 1.5s;
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

export const Part3 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #0D0E25;
button{
    height: 10vw;
    width: 25vw;
    background-color: #E91472;
    border: 0;
    border-radius: 5vw;
    color: #fff;
    font-size: 5vw;
    font-weight: 800;
    font-family: 'Open Sans', sans-serif;
}
.up{
display: flex;
justify-content: center;
align-items: center;
height: 45%;
}
.down{
display: grid;
flex-wrap: wrap;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-content: center;
align-items: center;
height: 55%;
width: 100%;
i{
    justify-self: center;
    font-size: 8vw;
    :hover{
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
}
`

export const Part4 = styled.div`
height: 10vh;
background-color: #0A0712;
`

export const Part5 = styled.div`
`

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `