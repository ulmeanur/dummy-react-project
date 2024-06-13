import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  // Define state to hold the data
  const [btnData, setBtnData] = useState(null);
  
  return <button className={classes.button}>{props.text}</button>;
};

export default Button;
