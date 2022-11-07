import { useEffect, useRef, useState } from "react";

export default function Carslide() {
  //state
  const [Enabled, setEnabled] = useState(true);
  const [Active, setActive] = useState(0);
  //ref
  const len = useRef(5);

  const sliderWrap = useRef(null);

  let delay = null;

  const convertSpeed = (el) => {
    return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
  };

  sliderWrap.current && (delay = convertSpeed(sliderWrap.current.children[0]));

  const moveNext = () => {
    if (!Enabled) return;
    setEnabled(false);
    setActive((Active) =>
      Active === len.current - 1 ? (Active = 0) : ++Active
    );
    sliderWrap.current.append(sliderWrap.current.firstElementChild);
    setTimeout(() => setEnabled(true), delay);
  };

  const movePrev = () => {
    if (!Enabled) return;
    setEnabled(false);
    setActive((Active) => (Active === 0 ? len.current - 1 : --Active));
    sliderWrap.current.prepend(sliderWrap.current.lastElementChild);
    setTimeout(() => setEnabled(true), delay);
  };

  const path = process.env.PUBLIC_URL;

  const modelsTitle = "B/u/g/g/a/t/i/b/e/s/t/M/o/d/e/l/s".split("/");
  const subTitle = ["Centodieci", "Bolid Concpet", "Chiron Sport 300+"];

  // carData
  const cars = [
    {
      title: "Bugatti Bolid Concpet",
      spec: "8.0 Gasoline",
    },
    {
      title: "Bugatti Chiron Sport 300+",
      spec: "6.0 Gasoline",
    },
    {
      title: "Bugatti Bolid Concpet",
      spec: "8.0 Gasoline",
    },
    {
      title: "Bugatti Chiron Sport 300+",
      spec: "5.0 Gasoline",
    },
    {
      title: "Bugatti Bolid Concpet",
      spec: "8.0 Gasoline",
    },
  ];

  return (
    <section id="Carslide" className="myScroll">
      <div className="line">
        <p>
          BUGATTI <span>EXPIRENCE</span>
        </p>
      </div>

      <ul className="ModelsTitle">
        {modelsTitle.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ul>

      <ul className="subTitle">
        {subTitle.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ul>

      <ul className="slider_wrap" ref={sliderWrap}>
        {cars.map((_, idx) => {
          return (
            <li key={idx}>
              <img src={path + `/img/section01/car0${idx + 1}.png`} alt={idx} />
            </li>
          );
        })}
      </ul>

      {/* carSubtitle */}
      <div className="subtitles">
        {cars.map((value, idx) => {
          let isOn = "";
          Active === idx && (isOn = "on");
          return (
            <div className={`subtitle_wrap ${isOn}`}>
              <h2>{value.title}</h2>
              <span>{value.spec}</span>
            </div>
          );
        })}
      </div>

      <div className="slideBtn">
        <div
          className="prev"
          onClick={() => {
            movePrev();
          }}
        >
          <strong>Prev</strong>
        </div>

        <div
          className="next"
          onClick={() => {
            moveNext();
          }}
        >
          <strong>Next</strong>
        </div>
      </div>

      <div className="viewbtn">
        <span>view more</span>
        <i></i>
      </div>
    </section>
  );
}
