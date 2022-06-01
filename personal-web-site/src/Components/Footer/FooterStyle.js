import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`

// export const Left = styled.div`
// display: flex;
// justify-content: flex-start;
// align-items: center;
// height: 100%;
// width: 100%;
// img{
//     height: 80%;
//     margin-left: 10%;
// }
// `

export const Right = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-end;
height: 50%;
width: 20%;
i{
    font-size: 2.3vw;
    color: #fff;
    :hover{
        color: #e91472;
        cursor: pointer;
        -webkit-animation: scale-up-center 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
}
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.3);
            transform: scale(1.3);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.3);
            transform: scale(1.3);
  }
}
`

export const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50%;
color: #fff;
font-size: 1.5vw;
font-family: 'Roboto', sans-serif;
font-weight: 500;
`