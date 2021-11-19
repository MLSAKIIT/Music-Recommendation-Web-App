
import { Fragment, useEffect, useState } from "react";

import SideBar from "./SideBar";
import classes from './Playlist.module.css'
import axios from "axios";


const Playlist = () => {
 



  return (

    <div className={classes.playlist}>
      <div className={classes.row}>
        <SideBar />
        <div className={classes.content}>
          <div className={classes.demo}>
            <h2 style={{ color: 'white', marginTop: '10px' }}>Your Playlist</h2>
         {/* {billboard.map((data)=>(
           
           <div>{data.song}</div>
         ))} */}
            
          </div>
        </div>
      </div>

      {/* <AudioPlayer /> */}
    </div>

  );
};
export default Playlist;
