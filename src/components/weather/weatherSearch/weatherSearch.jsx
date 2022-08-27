import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router";
import Description from "../../description/description";
import classes from "./weatherSearch.module.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

  const navigate = useNavigate();

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const buttonHandler = () => {
    navigate("/react-training/weather/view/" + capitalize(city));
  };

  return (
    <>
      <Description description="Simple forecast app for 16 days" />
      <div className={classes.wrapper}>
        <input
          className={classes.input}
          type="text"
          placeholder="Enter city"
          onChange={cityHandler}
          value={city}
        />

        <button className={classes.button} onClick={buttonHandler}>
          Search
        </button>
      </div>
    </>
  );
}
