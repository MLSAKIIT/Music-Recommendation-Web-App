import classes from './AudioPlayer.module.css'
import happyrock from './assets/happyrock.png'
import music from './assets/sun.mp3'
import "./AudioPlayer.module.css";
import { useState } from 'react';


const AudioPlayer = () => {

    const music1 = document.querySelector('audio');
    const mc = document.getElementById("music-container")
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");
    const[playing,setPlay]=useState(false);
    

    const playSong = () => {
        setPlay(true);
       
    // musicContainer.classList.add("play");
    // playBtn.querySelector("i.fa").classList.remove("fa-play");
    // playBtn.querySelector("i.fa").classList.add("fa-pause");
     document.getElementById("audio").play();
    }
    const pauseSong = () => {
        setPlay(false);
      
        document.getElementById("audio").pause();
    }
    return (
        <>
            <div className={classes.musicContainer} id="music-container">
                <div className={classes.musicInfo}>
                    <h4 className={classes.title} id="title"></h4>
                    <div className={classes.progressContainer} id="progress-container">
                        <div className={classes.progress} id="progress"></div>
                    </div>
                </div>

                <audio src={`${music}`} id="audio"></audio>

                <div className={classes.imgContainer}>
                    <img src={`${happyrock}`} alt="music-cover" id="cover" />
                </div>
                <div className={classes.navigation}>
                    <button id="prev" className={classes.actionBtn}>
                        <i className="fa fa-backward" aria-hidden="true"></i>
                    </button>

                 {playing? <button id="pause" className={classes.actionBtn}>
                        {/* , classes.actionBtnBig */}
                        <i className="fa fa-pause" onClick={pauseSong} aria-hidden="true"></i>
                    </button>:<button id="play" onClick={playSong} className={classes.actionBtn}>
                       
                       <i className="fa fa-play"  aria-hidden="true"></i>
                   </button>}
                   
                    

                    <button id="next" className={classes.actionBtn}>
                        <i className="fa fa-forward" aria-hidden="true"></i>
                    </button>
                </div>
                {/* <audio controls src={`${music}`}> </audio> */}
            </div>
        </>
    )
};

export default AudioPlayer;