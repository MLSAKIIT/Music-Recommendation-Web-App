
import { Fragment, useEffect, useState } from "react";
import happyrock from './assets/happyrock.png'

import SideBar from "./SideBar";
import classes from './Playlist.module.css'
import axios from "axios";


const Playlist = () => {
  
  // useEffect(()=>{
  //  const response=axios({
  //    method:'GET',
  //    url:"https://billboard-chart-scraper.netlify.app/.netlify/functions/server/billboard-200",
  //    headers:{'Content-Type':'application/x-www-form-urlencoded'},

  //  }).then((data)=>{console.log(data)})
    
  // },[])

  return (

    <div className={classes.playlist}>
      <div className={classes.row}>
        <SideBar />
        <div className={classes.content}>
          <div className={classes.demo}>
            <h2 style={{ color: 'white', marginTop: '10px' }}>Your Playlist</h2>
            <div class="card" style={{ width: '18rem', marginTop: '43px' }}>
              <img src={happyrock} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Demo</h5>
                <p className="card-text">Remove it while working on Playlist</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* <AudioPlayer /> */}
    </div>

  );
};
export default Playlist;
