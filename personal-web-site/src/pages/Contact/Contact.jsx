import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import { MainContainer, Part1, Part2 } from "./ContactStyle";
import img from "../../img/get.png";
import backgrounds from "../../img/contact.png";
import whatsapp from "../../img/whats.jpg";
import gmail from "../../img/gmail.jpg";


function Contact() {
  const [background, setBackground] = useState(backgrounds);
  useEffect(()=>{
    setTimeout(setBackground(whatsapp), 5)
    setTimeout(setBackground(gmail),6)
    setTimeout(setBackground(backgrounds),7)
  },[])
  const [set, setSet] = useState("");
  const hover = (e) => {
    var elements = e.target.className;
    var element = elements.animVal;
    if (element === "whatsapp") {
      setBackground(whatsapp);
    } else {
      setBackground(gmail);
    }
  };
  const leave = () => {
    setBackground(backgrounds);
  };
  const onClick = () =>{
    navigator.clipboard.writeText(JSON.stringify("brunospdev@gmail.com"));
  }
  return (
    <MainContainer>
      <Header />
      <Part1 background={`${background}`}>
        <div className="top">
          <img src={img} alt="get in touch" />
        </div>
        <div className="bottom">
          <a href="mailto:brunospdev@gmail.com" target="_blank" rel="noreferrer" onClick={()=>onClick()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="gmail gmails"
              onMouseEnter={hover}
              onMouseLeave={leave}
            >
              <path
                className="gmail"
                d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z"
              />
            </svg>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5512988870530" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="whatsapp whatsapps"
              onMouseEnter={hover}
              onMouseLeave={leave}
            >
              <path
                className="whatsapp"
                d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"
              />
            </svg>
          </a>
        </div>
      </Part1>
      <Part2></Part2>
    </MainContainer>
  );
}

export default Contact;
