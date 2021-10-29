import React from "react";
import classes from "./Main.module.css";
import MusicList from "./MusicList";

const Main = () => {
  return (
    <>
    <React.Fragment>
      <input className={classes.searchBar} placeholder="Search" />
    </React.Fragment>
     {/* <React.Fragment>
     <MusicList/>
   </React.Fragment> */}
   </>
    

  );
};

export default Main;
