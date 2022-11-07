function DetailView() {
  const title = "B/u/g/a/t/t/i/D/e/ta/i/l/V/i/e/w".split("/");

  const path = process.env.PUBLIC_URL;

  const images = [
    `${path}/img/section04/view1.png`,
    `${path}/img/section04/view2.png`,
    `${path}/img/section04/view3.png`,
    `${path}/img/section04/view4.png`,
  ];

  const subTitle = ["Centodieci", "Bolid Concpet", "Chiron Sport 300+"];

  return (
    <section className="myScroll">
      <ul className="view_title">
        {title.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ul>

      <ul className="subTitle">
        {subTitle.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ul>

      <div className="wrap">
        <ul className="left">
          {images.map((value, idx) => {
            if (idx >= 2) return;
            return (
              <li key={idx}>
                <img src={images[idx]} alt={value} />
              </li>
            );
          })}
        </ul>

        <ul className="right">
          {images.map((value, idx) => {
            if (idx >= 2) return;
            return (
              <li key={idx}>
                <img src={images[idx + 2]} alt={value} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default DetailView;
