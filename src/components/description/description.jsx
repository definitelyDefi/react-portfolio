import classes from "./description.module.css";
import React from "react";

const Description = (props) => {
  return (
    <div className={classes.description}>
      <p className={classes.text}>{props.description}</p>
    </div>
  );
};

export default Description;
