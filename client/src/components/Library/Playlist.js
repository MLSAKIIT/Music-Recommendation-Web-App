import { Fragment, useState } from "react";
import happyrock from './assets/happyrock.png'
import AudioPlayer from "./AudioPlayer";
import SideBar from "./SideBar";
import classes from './Playlist.module.css'
import ArtistSearch from './ArtistsSearch'
const Playlist = () => {
  return (
    <div className={classes.playlist}>
      <div className={classes.row}>
        <SideBar />
        <div className={classes.content}>
          {/* <ArtistSearch /> */}
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
