import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import "../../App.css";

export default function Card({ element }) {
  const [isHover, setIsHover] = useState(false);
  const [width, setWidth] = useState(0);

  function updateWidth() {
    const width = window.innerWidth;
    setWidth(width);
  }

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  const cardbg = {
    backgroundImage:
      element.heading === "Professional"
        ? "linear-gradient(to bottom,hsl(236, 72%, 79%) , hsl(237, 63%, 64%))"
        : "#ffffff",
    margin: element.heading !== "Professional" ? "1rem 0" : "0",
    color: element.heading === "Professional" ? "#ffffff" : "#6e728e",
    borderRadius:
      width < 600
        ? "1rem"
        : element.heading !== "Professional"
        ? element.heading === "Basic"
          ? "1rem 0 0 1rem"
          : "0 1rem 1rem 0"
        : "1rem",
    boxShadow:
      element.heading === "Professional"
        ? "0 0.5rem 2rem rgba(0,0,0,0.25)"
        : "0 0.3rem 0.5rem rgba(0,0,0,0.25)",
  };

  const btnbg = {
    background:
      element.heading !== "Professional"
        ? isHover
          ? "#ffffff"
          : "linear-gradient(to right,hsl(236, 72%, 79%) , hsl(237, 63%, 64%))"
        : isHover
        ? "#6d72de"
        : "#ffffff",
    color:
      element.heading === "Professional"
        ? isHover
          ? "#ffffff"
          : "#6d72de"
        : isHover
        ? "#6d72de"
        : "#ffffff",
    border: isHover
      ? element.heading !== "Professional"
        ? "1px solid #6d72de"
        : "1px solid hsl(240, 78%, 98%)"
      : "none",
    transform: isHover ? "scale(1.07)" : "none",
  };

  const priceColor = {
    color: element.heading !== "Professional" ? "#4a4d60" : "#ffffff",
  };

  const borderTopStyle = {
    borderTop:
      element.heading === "Professional"
        ? "1px solid #ffffff"
        : "1px solid #6e728e",
  };

  const borderStyle = {
    borderTop:
      element.heading === "Professional"
        ? "1px solid #ffffff"
        : "1px solid #6e728e",

    borderBottom:
      element.heading === "Professional"
        ? "1px solid #ffffff"
        : "1px solid #6e728e",
  };
  return (
    <div className={`${styles.card} flex flex-dir-col`} style={cardbg}>
      <h1 className={styles.heading}>{element.heading}</h1>
      <div className={`${styles.priceAmt} flex`} style={priceColor}>
        <span className={styles.dollarSign}>$</span>
        <p className={styles.price}>{element.price}</p>
      </div>
      <ul className={`${styles.cardDetails} flex flex-dir-col`}>
        <li className={styles.cardDetail}>
          <p className={styles.storage} style={borderTopStyle}>
            {element.storage} Storage
          </p>
        </li>
        <li className={styles.cardDetail}>
          <p className={styles.users} style={borderTopStyle}>
            {element.users} Users Allowed
          </p>
        </li>
        <li className={styles.cardDetail}>
          <p className={styles.limit} style={borderStyle}>
            Send up to {element.limit}
          </p>
        </li>
      </ul>
      <button
        className={styles.btn}
        style={btnbg}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Learn More
      </button>
    </div>
  );
}
