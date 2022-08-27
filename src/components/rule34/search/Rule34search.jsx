import { actions } from "../../../store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Rule34search.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Switch from "../../decorative/switch/switch";
import Description from "../../description/description";

const Rule34Search = function() {
  const [value, setValue] = useState(false);
  let dispatch = useDispatch();

  let apicall = async function(tags, limit, sort) {
    console.log(
      `https://api.rule34.xxx//index.php?page=dapi&s=post&q=index&tags=${tags} sort:${sort}&limit=${limit}&json=1`
    );
    await fetch(
      `https://api.rule34.xxx//index.php?page=dapi&s=post&q=index&tags=${tags} sort:${sort}&limit=${limit}&json=1`
    )
      .then((res) => res.json())
      .then((result) =>
        dispatch({ type: actions.searchRule34, items: result })
      );
  };

  const [tags, settags] = useState("");
  const [limit, setlimit] = useState("");
  const navigate = useNavigate();

  const handleChangeTags = (event) => {
    settags(event.target.value);
  };

  const handleChangeLimit = (event) => {
    setlimit(event.target.value);
  };

  let searchfunc = () => {
    dispatch({ type: actions.resetRule34 });
    let sortType = value === true ? "score" : "updated";
    apicall(tags, limit, sortType);
    debugger;
    navigate("/react-training/rule34/pics");
  };
  return (
    <div>
      <Description description="App for working with rule34 api and viewing pictures easily" />

      <div className={classes.container}>
        <input
          placeholder="Write tags"
          value={tags}
          onChange={handleChangeTags}
          className={classes.input}
        ></input>
        <input
          placeholder="Choose limit of photos"
          value={limit}
          onChange={handleChangeLimit}
          className={classes.input}
        ></input>

        <div className={classes.sortingHeader}>Sorting</div>
        <div className={classes.switchWrapper}>
          <span className={classes.sorting}>Date</span>
          <Switch
            isOn={value}
            handleToggle={() => setValue(!value)}
            className={classes.switch}
          />
          <span className={classes.sorting}>Score</span>
        </div>

        <NavLink
          className={classes.button}
          to="/react-training/rule34/pics"
          onClick={searchfunc}
        >
          Search
        </NavLink>
      </div>
    </div>
  );
};

export default Rule34Search;
