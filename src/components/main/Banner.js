export default function Banner() {
  const titleTop = "B/u/g/a/t/t/i".split("/");
  const titleBottom = "M/e/m/b/e/r/S/h/i/p".split("/");

  return (
    <main id="Banner" className="myScroll">
      <div className="inner">
        <h3 className="subtitle">CONCEPT CAR</h3>
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
        <p>
          The BUGATTI Bolide has an incredible weight-to-output ratio of 0.67 kg
          <br />
          per PS The most extreme, intransigent, fastest and lightest vehicle.
        </p>
        <a href="#">Login / Join</a>
      </div>
    </main>
  );
}
