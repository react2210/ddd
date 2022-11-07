import { useEffect, useRef, useState } from "react";

// mainComponents
import Header from "../common/Header";

import Visual from "./Visual";
import BestModels from "./BestModels";
import Banner from "./Banner";
import Videos from "./Videos";
import DetailView from "./DetailView";
import Experience from "./Experience";
import ShowCar from "./ShowCar";
import Specifiction from "./Specification";
import PhotoView from "./PhotoView";

import Btns from "./Btns";

import Anime from "../../asset/Anime";

function Main() {
  const main = useRef(null);
  // 값을 저장하기위해 useRef 빈배열 초기화
  const pos = useRef([]);

  const [Index, setIndex] = useState(0);
  const [Scrolled, setScrolled] = useState(0);

  // secs를 전역변수로 선언
  let secs = null;
  let scroll;

  const getPos = () => {
    // 위치값을 저장할 빈배열
    pos.current = [];
    secs = main.current.querySelectorAll(".myScroll");

    // Myscroll의 맨 위에 위치값을 pop.current 빈 배열에 요소로 넣음
    for (const sec of secs) {
      pos.current.push(sec.offsetTop);
    }
  };

  const activation = () => {
    const base = -window.innerHeight / 2;
    const scroll = window.scrollY;
    const btns = main.current.querySelectorAll(".scroll_navi li");

    setScrolled(scroll);

    pos.current.map((posi, idx) => {
      //현재 스크롤한 값과 pos의 값을 비교해서
      if (scroll <= posi + base) {
        btns[pos.current.length - 1 - idx].classList.remove("on");
        secs[idx].classList.remove("on");
      }

      if (scroll >= posi + base) {
        //일단 모두 비활성화
        for (let i = 0; i < secs.length; i++) {
          // if (secs[i] === secs[6]) continue; // sec[6]은 remove에서 제외
          secs[i].classList.remove("on");
        }

        //버튼을 반대순서대로 활성화
        btns[pos.current.length - 1 - idx].classList.add("on");
        secs[idx].classList.add("on");
      }
    });
  };

  useEffect(() => {
    getPos();
    //리사이즈 이벤트가 발생하면 스크롤 값을 다시 불러온다
    window.addEventListener("resize", getPos);
    window.addEventListener("scroll", activation);
    return () => {
      window.removeEventListener("resize", getPos);
      window.removeEventListener("scroll", activation);
    };
  }, []);

  // 의존배열의 Index값이 변경될때 마다 콜백함수를 실행
  useEffect(() => {
    new Anime(window, {
      prop: "scroll",
      value: pos.current[Index],
      duration: 500,
    });
  }, [Index]);

  return (
    <main ref={main}>
      <Header type={"main"} />
      <Visual />
      <BestModels />
      <Banner />
      <Videos />
      <DetailView />
      <Experience Scrolled={Scrolled} start={pos.current[5]} />
      <ShowCar />
      <Specifiction />
      <PhotoView />
      {/* porps로 setIndex를 넘김 */}
      <Btns setIndex={setIndex} />
    </main>
  );
}

export default Main;
