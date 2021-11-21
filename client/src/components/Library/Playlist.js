
import { Fragment, useEffect, useState } from "react";

import SideBar from "./SideBar";
import classes from './Playlist.module.css'
import axios from "axios";
import topvideos from "../../data/topmusicvideos";
import weeklyglobal from "../../data/top-weekly-songs-global";
import weeklyindia from "../../data/top-weekly-songs-india";

const Playlist = () => {
 
  return (

    <div className={classes.playlist}>
      <div className={classes.row}>
        <SideBar />
        <div className={classes.content}>
          <div className={classes.demo}>
            <h2 style={{ color: 'white', marginTop: '10px' }}>Your Playlist</h2>
            <div>{topvideos.map((data)=>(
            <div>
                <iframe width="560" height="315" src={data["YouTube URL"]} title={data["Video Title"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div></div>
            </div>
        ))}</div>
             <div>{weeklyglobal.map((data)=>(
            <div>
                <iframe width="560" height="315" src={data["YouTube URL"]} title={data["Track Name"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div></div>
            </div>
        ))}</div>
         <div>{weeklyindia.map((data)=>(
            <div>
                <iframe width="560" height="315" src={data["YouTube URL"]} title={data["Track Name"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div></div>
            </div>
        ))}</div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Playlist;
