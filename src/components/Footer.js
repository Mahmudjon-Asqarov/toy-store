import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";
function Footer() {
  const contact = [
    {
      id: 1,
      icon: <FaTelegramPlane />,
      link: "https://t.me/MahmudjonAsqarov",
    },
    {
      id: 2,
      icon: <FiYoutube />,
      link: "https://www.youtube.com/channel/UCZE2MYCs_ELGBwkeYhubW8Q",
    },
    {
      id: 3,
      icon: <SiInstagram />,
      link: "https://www.instagram.com/mahmudjon_asqarov/",
    },
  ];
  return (
    <footer>
      © {new Date().getFullYear()} Copyright Text
      <ul className="collection_item">
        {contact.map((item) => (
          <li
            className="collection_link"
            key={item.id}
            style={{ color: `${item.color}` }}
          >
            <a href={item.link} target="_blank">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
