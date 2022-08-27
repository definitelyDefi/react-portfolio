import { useSelector } from "react-redux";
import classes from "./rule34.module.css";
import React from "react";

const Rule34 = function() {
  // <video src={`https://api-cdn-us-mp4.rule34.xxx/images/${item.directory}/${item.image}`}></video>
  let items = useSelector((state) => state.rule34.items);

  return (
    <div className={classes.wrapper}>
      {items.map((item) =>
        item.file_url.endsWith(".mp4") ? (
          <div className={classes.container}>
            {" "}
            <video
              src={item.file_url}
              poster={item.sample_url}
              style={
                item.sample_height === 0
                  ? { height: item.height, width: item.width }
                  : { height: item.sample_height, width: item.sample_width }
              }
              controls
            ></video>
          </div>
        ) : item.file_url.endsWith(".gif") ? (
          <div className={classes.container}>
            {" "}
            <img
              className={classes.img}
              style={
                item.sample_height === 0
                  ? { height: item.height, width: item.width }
                  : { height: item.sample_height, width: item.sample_width }
              }
              src={item.sample_url}
              alt={item.sample_url}
              loading="lazy"
            />{" "}
          </div>
        ) : item.file_url.endsWith(".jpg") ? (
          <div className={classes.container}>
            {" "}
            <img
              className={classes.img}
              style={
                item.sample_height === 0
                  ? { height: item.height, width: item.width }
                  : { height: item.sample_height, width: item.sample_width }
              }
              src={item.sample_url}
              alt={item.sample_url}
              loading="lazy"
            />{" "}
          </div>
        ) : item.file_url.endsWith(".jpeg") ? (
          <div className={classes.container}>
            {" "}
            <img
              className={classes.img}
              style={
                item.sample_height === 0
                  ? { height: item.height, width: item.width }
                  : { height: item.sample_height, width: item.sample_width }
              }
              src={item.sample_url}
              alt={item.sample_url}
              loading="lazy"
            />{" "}
          </div>
        ) : item.file_url.endsWith(".png") ? (
          <div className={classes.container}>
            {" "}
            <img
              className={classes.img}
              style={
                item.sample_height === 0
                  ? { height: item.height, width: item.width }
                  : { height: item.sample_height, width: item.sample_width }
              }
              src={item.sample_url}
              alt={item.sample_url}
              loading="lazy"
            />{" "}
          </div>
        ) : null
      )}
    </div>
  );
};

export default Rule34;
