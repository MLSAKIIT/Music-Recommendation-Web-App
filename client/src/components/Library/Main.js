import React from "react";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <React.Fragment>
      <input className={classes.searchBar} placeholder="Search" />
    </React.Fragment>
  );
};

export default Main;
