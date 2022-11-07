import { useSelector } from "react-redux";

// Main컴포넌트에서 Scolled,start 넘겨받음
function Article({ Scrolled, start }) {
  const position = Scrolled - start || 0;

  const titleTop = "B/u/g/a/t/t/i".split("/");
  const titleBottom = "E/x/p/e/r/i/e/n/c/e".split("/");

  return (
    <main className="myScroll">
      <div className="inner">
        <div className="carImg">
          <img
            src={process.env.PUBLIC_URL + "/img/section05/s05car.png"}
            alt="s05car"
          />
        </div>

        <div className="text_box">
          <h4>Hyper Sport Car</h4>

          <ul className="titleTop title">
            {titleTop.map((value, idx) => {
              return <li key={idx}>{value}</li>;
            })}
          </ul>

          <ul className="titleBottom title">
            {titleBottom.map((value, idx) => {
              return <li key={idx}>{value}</li>;
            })}
          </ul>

          <p>
            Bugatti revives coaching building tradition with hyper-sports cars,
            We've created a unique model that can last forever. Currently, the
            last of 40 vehicles is being handed over to the owner.
          </p>
          
          <div className="article_btn">VIEW MORE</div>
        </div>

        <div className="article_bg"></div>

        <div
          style={{
            left: -2000 + position / 2,
          }}
          className="linetext"
        >
          bugatti bolid concept bugatti bolid concept bugatti bolid concept
          bugatti bolid concept
        </div>
      </div>
    </main>
  );
}

export default Article;
