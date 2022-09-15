import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/img/pngegg.png";

function Header() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);
  return (
    <div className="header">
      <NavLink to={"/"} className="logo">
        <img src={icon} alt="" />
      </NavLink>
      <ul>
        <li>
          <NavLink to={"/"}>Products</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
