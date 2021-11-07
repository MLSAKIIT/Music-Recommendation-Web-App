import {Fragment,useState} from "react";
import AudioPlayer from "./AudioPlayer";
import SideBar from "./SideBar";
import classes from './SideBar.module.css';
import Other from "./Other"
const Favourite = () => {
  return (
    <>
    <div className={classes.row}>
        <SideBar />    
        
      </div>
    <Fragment> 
      <AudioPlayer />
     </Fragment>
     </>   
  );
};
export default Favourite;
