import React, { useState } from "react";

function Button({ text, width }) {
  const [bgColor, setBgColor] = useState("#f4ce14");

  const style = {
    display: "flex",
    backgroundColor: bgColor,
    borderRadius: ".5rem",
    width: width,
    minWidth: 'fit-content',
    height: 'fit-content',
    fontWeight: "800",
    fontFamily: "Karla, sans-serif",
    fontSize: '1.4rem',
    cursor: "pointer",
    color: "#333",
    padding: "15px",
    justifyContent: "center",
    textDecoration: 'none'
  };

  return (
    <a
      style={style}
      href="/"
      onMouseEnter={() => setBgColor("#cfae11")}
      onMouseLeave={() => setBgColor("#f4ce14")}
    >
      {text}
    </a>
  );
}

export default Button;
