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
          <h2 style={{ color: 'white', margin: '20px', marginTop: '25px' }}>Top Music Videos</h2>
          <div className={classes.cards}>{topvideos.map((data) => (
            <iframe src={data["YouTube URL"]} title={data["Video Title"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          ))}</div>
          <h2 style={{ color: 'white', margin: '20px' }}>Top Weekly Global Music</h2>
          <div className={classes.cards}>{weeklyglobal.map((data) => (
            <iframe src={data["YouTube URL"]} title={data["Track Name"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          ))}</div>
          <h2 style={{ color: 'white', margin: '20px' }}>Top Weekly Indian Music</h2>
          <div className={classes.cards}>{weeklyindia.map((data) => (
            <iframe src={data["YouTube URL"]} title={data["Track Name"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          ))}</div>
        </div>
      </div>
    </div>

  );
};
export default Playlist;
