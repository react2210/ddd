import React, { useEffect } from "react";

export default function Specification() {
  const title = "B/u/g/a/t/t/i/S/p/e/c/i/f/i/c/a/t/i/o/n".split("/");

  const iconList = [
    "Accessi\nharging",
    "Intelligent\ndrive modes",
    "Everyday fuel\nefficiency",
  ];

  const subTitle = ["Centodieci", "Bolid Concpet", "Chiron Sport 300+"];

  const path = process.env.PUBLIC_URL;

  return (
    <main className="myScroll">
      <div className="specification_wrap">
        <ul className="title">
          {title.map((value, idx) => {
            return <li key={idx}>{value}</li>;
          })}
        </ul>

        <ul className="subTitle">
          {subTitle.map((value, idx) => {
            return <li key={idx}>{value}</li>;
          })}
        </ul>

        <div className="carBack">
          <img src={`${path}/img/section07/s07_car.png`} alt="carBack" />
        </div>

        <div className="iconList">
          {iconList.map((value, idx) => {
            return (
              <ul key={idx}>
                <li>
                  <img
                    src={`${path}/img/section07/icon${idx + 1}.png`}
                    alt={idx}
                  />
                </li>
                <li>{value}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </main>
  );
}
