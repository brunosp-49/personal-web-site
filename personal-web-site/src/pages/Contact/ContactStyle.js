import styled from "styled-components"
import backgrounds from "../../img/social.png"

export const MainContainer = styled.div`
`
export const Part1 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100vh;
background-image: url(${props => props.background || backgrounds});
background-size: cover;
svg{
        width: 100%;
        fill: #fff;
    }
img{
    width: 90%;
    pointer-events: none;
}
a{
    display: flex;
    align-items: center;
    width: 25%;
}
.top{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 100%;
    /* background-color: blue; */
    width: 100%;
    
}
.bottom{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 6%;
    width: 65%;
    height: 50%;
    /* background-color: red; */
}
.whatsapps{
    :hover{
    fill: #25c862;
    cursor: pointer;
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
}
.gmails{
    :hover{
    fill: #b73728;
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

export const Part2 = styled.div`
height: 30vh;
background-color: #0a0712;
`

// export const MainContainer = styled.div`
// `