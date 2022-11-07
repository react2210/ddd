import { faCcDiscover } from "@fortawesome/free-brands-svg-icons";
import React from "react";

function Footer() {
  const footerMenu = [
    {
      title: "Discover",
      text1: "News",
      text2: "Carrers",
      text3: "Cadillac Worldwide",
    },
    {
      title: "Assistance ",
      text1: "Contact Us",
      text2: "FaQ",
      text3: "Legay Vehicles",
    },
    {
      title: "Owners",
      text1: "Owner Center",
      text2: "Recall Information",
      text3: "Owners Manuals",
    },
  ];

  return (
    <footer>
      <div className="inner">
        {footerMenu.map((value, idx) => {
          return (
            <ul key={idx}>
              <li>{value.title}</li>
              <li>{value.text1}</li>
              <li>{value.text2}</li>
              <li>{value.text3}</li>
            </ul>
          );
        })}
        <ul className="mail">
          <li>Mails</li>
          <input type="text" placeholder="mail" />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
