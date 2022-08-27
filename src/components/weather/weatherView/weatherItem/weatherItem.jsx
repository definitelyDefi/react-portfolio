import React from "react";
import classes from "./weatherItem.module.css";
import moment from "moment";

export default function WeatherItem(props) {
  return (
    <div className={classes.item}>
      <h3 className={classes.date}>{moment(props.date).format("LL")}</h3>

      <img
        className={classes.logo}
        src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
        alt={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
      />

      <h3
        className={classes.temp}
      >{`${props.temp}° (${props.min_temp}° - ${props.max_temp}°)`}</h3>
      <h4 className={classes.description}>{props.description}</h4>
      <h4 className={classes.wind}>
        Wind: {props.wind_spd} m/s || {props.wind_cdir_full}
      </h4>
    </div>
  );
}
