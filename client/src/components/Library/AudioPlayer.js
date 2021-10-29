import { ClassNames } from "@emotion/react";
import ReactPlayer from "react-player";
import classes from './AudioPlayer.module.css'
import happyrock from './assets/happyrock.png'
import music from './assets/sun.mp3'
import "./AudioPlayer.module.css";

const AudioPlayer = () => {

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
                    <button id="play" className={classes.actionBtn}>
                    {/* , classes.actionBtnBig */}
                        <i className="fa fa-play" aria-hidden="true"></i>
                    </button>
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


     //     <div>
        //     <ReactPlayer
        //       url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        //     // url={[
        //     //     {src: './assets/sun.mp3', type: 'audio/mp3'},

        //     //   ]}
        //       className={classes.audio_player}
        //       height="60px"
        //       width="99vw"
        //       playing={false}
        //       controls={true}
        //     />
        //   </div>