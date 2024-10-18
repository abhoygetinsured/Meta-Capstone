import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import "./Header.css";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <img src={Logo} alt="Logo" className="logo-image" />
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`} />
        <div className={`line ${menuOpen ? "open" : ""}`} />
        <div className={`line ${menuOpen ? "open" : ""}`} />
      </div>
      
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>About</p>
        </li>
        <li>
          <p>Menu</p>
        </li>
        <li>
          <p>Testimonials</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </ul>
    </nav>
  );
}
