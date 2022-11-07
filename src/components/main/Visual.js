import React, { useEffect, useRef, useState } from "react";
// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 폰트어썸 아이콘 불러오기
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Visual() {
  const title = useRef(null);
  const [Active, setActive] = useState(0);
  const len = useRef(4);

  let [Count, setCount] = useState([0, 0, 0]);

  useEffect(() => {
    let id = setInterval(() => {
      if (Count[0] <= 120) {
        setCount(Count[0]++);
      }
      if (Count[1] <= 52) {
        setCount(Count[1]++);
      }
      if (Count[2] <= 105) {
        setCount(Count[2]++);
      }
      // count1이 끝나면 종료
      if (Count[0] === 121) {
        clearInterval(id);
      }
    }, 20);
  }, []);

  const path = process.env.PUBLIC_URL;

  // visualTitleTop,Bottom
  const titleTop = "B/u/g/a/t/t/i".split("/");
  const titleBottom = "B/o/l/i/d/C/o/n/c/e/p/t".split("/");

  // visualSpec
  const specs = [
    { tag: "MPH", spec: "Top Speed" },
    { tag: "S", spec: "0-60mpg" },
    { tag: "L", spec: "Engine" },
  ];

  // VisualIcons
  const icons = [faInstagram, faTwitter, faYoutube];

  // visualSlider;
  useEffect(() => {
    title.current.classList.add("on");

    setTimeout(() => {
      setActive((Active) =>
        Active === len.current - 1 ? (Active = 0) : ++Active
      );
    }, 3000);
    console.log(Active);
  }, [Active]);

  return (
    <figure id="visual" className="myScroll">
      {/* visualIcons */}
      <ul className="sns_icons">
        {icons.map((value, idx) => {
          return <FontAwesomeIcon key={idx} icon={value} />;
        })}
      </ul>

      {/* mainTitles  */}
      <div className="title" ref={title}>
        <ul className="titleTop">
          {titleTop.map((value, idx) => {
            return <li key={idx}>{value}</li>;
          })}
        </ul>

        <ul className="titleBottom">
          {titleBottom.map((value, idx) => {
            return <li key={idx}>{value}</li>;
          })}
        </ul>

        {/* visualText */}
        <div className="text_wrap">
          <p>
            France's top manufacturer of hand-operated cars, founded in 1909
          </p>
        </div>

        {/* visualBtn */}
        <a href="#" className="btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          VIEW MORE
        </a>
      </div>

      {/* visualNumbering */}
      <div className="number_wrap">
        {specs.map((value, idx) => {
          return (
            <ul key={idx}>
              <li>
                <h2>{Count[idx]}</h2>
                <span>{value.tag}</span>
              </li>
              <li>{value.spec}</li>
            </ul>
          );
        })}
      </div>

      {/* visualSlider */}
      <ul className="slider">
        {Array(4)
          .fill()
          .map((_, idx) => {
            let isOn = "";
            Active === idx && (isOn = "on");
            return (
              <>
                <li key={idx} className={isOn}>
                  <img
                    src={`${path}/img/visual/visual${idx + 1}.png`}
                    alt={idx}
                  />
                </li>
              </>
            );
          })}
      </ul>
    </figure>
  );
}
