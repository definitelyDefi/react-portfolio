import React from "react";
import classes from "./switch.module.css";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={classes.checkbox}
        id={`react-switch-new`}
        type="checkbox"
      />

      <label
        style={{ background: isOn && "#06D6A0" }}
        className={classes.label}
        htmlFor={`react-switch-new`}
      >
        <span className={classes.button} />
      </label>
    </>
  );
};

export default Switch;
