import React, { useState, useEffect } from "react";
import classes from "./defaultTestSetup.module.css";

const MyComponent = () => {
  // Define state to hold the data
  const [varData, setVarData] = useState(null);
  

  return <div className={classes.container}></div>;
};

export default MyComponent;
