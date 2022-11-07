import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Popup from "../common/Popup";

function Videos() {
  const [Index, setIndex] = useState(0);
  // 데이터 가져옴
  const { youtube } = useSelector((store) => store.youtubeReducer);
  // console.log(youtube);

  const [Enabled, setEnabled] = useState(true);
  const [Active, setActive] = useState(0);
  const len = useRef(4);
  const panel = useRef(null);
  const pop = useRef(null);

  const subTitle = ["Centodieci", "Bolid Concpet", "Chiron Sport 300+"];

  const path = process.env.PUBLIC_URL;

  // 타이틀 글자수 설정
  function title(vid) {
    let title = vid.snippet.title;
    if (title.length >= 30) {
      return (title = title.substr(0, 30) + "...");
    }
  }

  // 영상 설명 글자수 설정
  function article(vid) {
    let cont = vid.snippet.description;
    if (cont.length >= 100) {
      return (cont = cont.substr(0, 200) + "...");
    }
  }

  // 슬라이드 버튼함수 prev
  function movePrev() {
    if (!Enabled) return;
    setEnabled(false);
    panel.current.append(panel.current.firstElementChild);
    setTimeout(() => setEnabled(true), 1000);
  }

  // 슬라이드 버튼함수 next
  function moveNext() {
    if (!Enabled) return;
    setEnabled(false);
    panel.current.prepend(panel.current.lastElementChild);
    setTimeout(() => setEnabled(true), 1000);
  }

  // 슬라이드 내용 함수 Next
  function articleNext() {
    if (!Enabled) return;
    setEnabled(false);
    setActive((Active) =>
      Active === len.current - 1 ? (Active = 0) : ++Active
    );
    setTimeout(() => setEnabled(true), 1000);
  }

  // 슬라이드 내용 함수 Prev
  function articlePrev() {
    if (!Enabled) return;
    setEnabled(false);
    setActive((Active) => (Active === 0 ? len.current - 1 : --Active));
    setTimeout(() => setEnabled(true), 1000);
  }

  // Active 값 확인용도
  // useEffect(() => {
  //   console.log(Active);
  // }, [Active]);

  const mainTitle = "B/u/g/a/t/t/i/Q/u/a/l/i/t/y".split("/");

  return (
    <>
      <main id="slide" className="myScroll">
        <div className="inner">
          <ul className="title">
            {mainTitle.map((value, idx) => {
              return <li key={idx}>{value}</li>;
            })}
          </ul>

          <ul className="subTitle">
            {subTitle.map((value, idx) => {
              return <li key={idx}>{value}</li>;
            })}
          </ul>

          {/* videoSlide */}
          <ul className="slide_wrap" ref={panel}>
            {youtube.map((vid, idx) => {
              if (idx > 4) return; // idx가 4 넘으면 끊고
              return (
                <li
                  key={idx}
                  onClick={() => {
                    pop.current.open();
                    setIndex(idx);
                  }}
                >
                  <FontAwesomeIcon icon={faPlay} />
                  <img
                    src={path + `/img/section03/s03vid${idx}.png`}
                    alt={idx}
                  />
                </li>
              );
            })}
          </ul>

          <div className="center">
            {youtube.map((vid, idx) => {
              if (idx > 4) return;
              let isOn = "";
              Active === idx && (isOn = "on");
              return (
                <>
                  <div className={`article_btn ${isOn}`} key={idx}></div>

                  <div className={`article_wrap ${isOn}`} key={vid.id}>
                    <h1>{title(vid)}</h1>
                    <p>{article(vid)}</p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="btn_wrap">
            <div
              className="prev"
              onClick={() => {
                movePrev();
                articlePrev();
              }}
            >
              PREV
            </div>
            <span>/</span>
            <div
              className="next"
              onClick={() => {
                moveNext();
                articleNext();
              }}
            >
              NEXT
            </div>
          </div>
        </div>
      </main>

      {/* popup창  */}
      <Popup ref={pop}>
        {youtube.length !== 0 && (
          <iframe
            src={`https://www.youtube.com/embed/${youtube[Index].snippet.resourceId.videoId}`}
            frameBorder="0"
          ></iframe>
        )}
      </Popup>
    </>
  );
}
export default Videos;
