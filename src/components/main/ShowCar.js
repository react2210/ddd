export default function Showcar() {
  const titleTop = "B/u/g/a/t/t/i".split("/");
  const titleBottom = "B/o/l/i/d/C/o/n/c/p/e/t".split("/");

  const path = process.env.PUBLIC_URL;

  return (
    <main id="car_container" className="myScroll">
      <div className="title">
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
        <p>New Bugatti Concept System</p>

        <div className="btnWrap">
          <a href="#">Play</a>
          <a href="#">View More</a>
        </div>
      </div>

      <div className="car_wrap">
        <div className="car_body">
          <img src={path + "/img/section06/s06body.png"} alt="body" />
        </div>
        <div className="left_tire">
          <img src={path + "/img/section06/s06left.png"} alt="left_tire" />
        </div>
        <div className="right_tire">
          <img src={path + "/img/section06/s06right.png"} alt="right_tire" />
        </div>
      </div>
    </main>
  );
}
