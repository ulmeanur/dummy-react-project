import React, { useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  // Define state to hold the data
  const [headerData, setHeaderData] = useState(null);
  

  return <div className={classes.header}><h1>Hello</h1></div>;
};

export default Header;
