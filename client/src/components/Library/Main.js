import React from "react";
import classes from "./Main.module.css";
import MusicList from "./MusicList";

const Main = () => {
  return (
    <>
    <React.Fragment>
 
      <div className={classes.searchInputWrapper}>

      <input className={classes.searchBar} placeholder="Search for any music"  />
      </div>
    </React.Fragment>
     {/* <React.Fragment>
     <MusicList/>
   </React.Fragment> */}
   </>
    

  );
};

export default Main;
