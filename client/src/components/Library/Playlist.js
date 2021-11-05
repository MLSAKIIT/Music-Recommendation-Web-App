import {Fragment,useState} from "react";
import AudioPlayer from "./AudioPlayer";
import SideBar from "./SideBar";
import classes from './SideBar.module.css'
import './Playlist.module.css'
const Playlist = () => {
  return (
    <>
    <div className={classes.row}>
        <SideBar className={classes.SideBar} />
         
      </div>
    <Fragment> 
      <AudioPlayer />
     </Fragment>
     </>   
  );
};
export default Playlist;
