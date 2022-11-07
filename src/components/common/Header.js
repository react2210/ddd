import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {

  const active = {
    color: "red",
  };

  const header = useRef(null);

  // header 활성화
  const headerActive = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY <= 10) {
      header.current.classList.add("on");
    } else {
      header.current.classList.remove("on");
    }
  };

  useEffect(() => {
    headerActive();
    window.addEventListener("scroll", headerActive);
    return () => {
      window.removeEventListener("scroll", headerActive);
    };
  }, []);

  return (
    <header ref={header}>
      <div className="inner">
        <h1 className="logo">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/header/logo.png"}
              alt="logo"
            />
          </Link>
        </h1>

        <ul id="gnb">
          <li>
            <NavLink to="/department" activeStyle={active}>
              Department2
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" activeStyle={active}>
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" activeStyle={active}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/youtube" activeStyle={active}>
              Youtube
            </NavLink>
          </li>
          <li>
            <NavLink to="/location" activeStyle={active}>
              Location
            </NavLink>
          </li>
          <li>
            <NavLink to="/member" activeStyle={active}>
              Member
            </NavLink>
          </li>
        </ul>

        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}
