import { useEffect, useRef } from "react";

// 바로 porps안에 setIndex속성을 구조분해할당으로 바로 받아옴
function Btns({ setIndex }) {
  const battery = useRef(null);

  // let len = battery.current.querySelectorAll(".on").length;
  // let isOn = len === 7 ? (isOn = "on") : "";

  return (
    <ul className={`scroll_navi`} ref={battery}>
      <li onClick={() => setIndex(0)}></li>
      <li onClick={() => setIndex(1)}></li>
      <li onClick={() => setIndex(2)}></li>
      <li onClick={() => setIndex(3)}></li>
      <li onClick={() => setIndex(4)}></li>
      <li onClick={() => setIndex(5)}></li>
      <li onClick={() => setIndex(6)}></li>
      <li className="on" onClick={() => setIndex(7)}></li>
    </ul>
  );
}

export default Btns;
