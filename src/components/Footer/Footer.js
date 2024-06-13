import React, { useState } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  // Define state to hold the data
  const [footerData, setFooterData] = useState(null);

  return (
    <div className={classes.footer}>
      <ul>
        <li>
          <a href="#menu1">menu 1</a>
        </li>
        <li>
          <a href="#menu2">menu 2</a>
        </li>
        <li>
          <a href="#menu3">menu 3</a>
        </li>
        <li>
          <a href="#menu4">menu 4</a>
        </li>
        <li>
          <a href="#menu5">menu 5</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
