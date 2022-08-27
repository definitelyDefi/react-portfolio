import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./homeItem.module.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HomeItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.item}>
      <Card.Title className={classes.header}>{props.title}</Card.Title>
      <div className={classes.buttonGroup}>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="secondary"
          className={classes.button}
        >
          About
        </Button>

        <NavLink className={classes.link} to={props.link}>
          <Button variant="success" className={classes.button}>
            Link
          </Button>
        </NavLink>
      </div>

      <div style={{ minHeight: "170px", marginTop: "10px" }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "350px" }} className={classes.collapse}>
              {props.description}
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
