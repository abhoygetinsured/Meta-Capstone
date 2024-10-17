import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import "./Header.css";

export default function Header() {
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // downscroll
        setVisible(false);
      } else {
        // upscroll
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    }
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
      <ul className="nav-menu">
        <li><p>Home</p></li>
        <li><p>About</p></li>
        <li><p>Menu</p></li>
        <li><p>Reservations</p></li>
        <li><p>Order Online</p></li>
        <li><p>Login</p></li>
      </ul>
    </nav>
  );
}
