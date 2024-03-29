import styled from "styled-components";
import backgrounds from "../../img/social.png";

export const MainContainer = styled.div``;
export const Part1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-image: url(${(props) => props.background || backgrounds});
  background-size: cover;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  .inicial {
    -webkit-animation: tracking-in-expand 0.7s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;

    @-webkit-keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 600px) {
      height: 50%;
      align-items: flex-end;
    }
    img {
      width: 60%;
      pointer-events: none;
      @media screen and (max-width: 600px) {
        width: 70%;
      }
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 6%;
    width: 65%;
    height: 50%;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      height: 40%;
    }
    svg {
      width: 70%;
      fill: #fff;
      @media screen and (max-width: 600px) {
      width: 100%;
    }
    }
    a {
      display: flex;
      align-items: center;
      width: 25%;
    }
  }
  .whatsapps {
    :hover {
      fill: #25c862;
      cursor: pointer;
      -webkit-animation: scale-up-center 0.4s
        cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
  }
  .gmails {
    :hover {
      fill: #b73728;
      cursor: pointer;
      -webkit-animation: scale-up-center 0.4s
        cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
  }
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.15);
      transform: scale(1.15);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.15);
      transform: scale(1.15);
    }
  }
`;

// export const MainContainer = styled.div`
// `
