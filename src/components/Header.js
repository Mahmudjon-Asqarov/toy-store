import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/img/pngegg.png";
import { useTranslation, setLanguage } from "react-multi-lang";

function Header() {
  const t = useTranslation();
  const [lang, setLang] = useState(true);
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
          <NavLink to={"/"}>{t("product")}</NavLink>
        </li>
        <li>
          {lang ? (
            <button
              className="btn red accent-1"
              onClick={() => {
                setLanguage("uz");
                localStorage.setItem("lang", "uz");
                setLang(!lang);
              }}
            >
              English
            </button>
          ) : (
            <button
              className="btn red accent-1"
              onClick={() => {
                setLanguage("en");
                localStorage.setItem("lang", "en");
                setLang(!lang);
              }}
            >
              O‘zbekcha
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Header;
