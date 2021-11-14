import classes from './MusicList.module.css';
import React from 'react'
import songs from './../../data/songs-sampledataset';
import bg from "./assets/homeBg.png"
import bg1 from "./assets/bg1.png";
import iconImg from "./assets/happyrock.png"
import Other from './Other';
import { useRef } from 'react'
// import Navbar from '../Navbar/Navbar'
const MusicList = () => {
    const titleRef = useRef();
    return (
        <>

            <div className={classes.container}>
                {/* <Navbar/> */}
                <div className={classes.musicLeft}>
                    <h2 className={classes.title} style={{ color: "white", alignItems: "flex-start", justifyContent: "flex-start", fontSize: '30px',paddingTop: "20px", paddingLeft: "30px" }}>Let the Music Speak</h2>
                    <div className={classes.content} ref={titleRef}>

                        <div className={classes.contentrow} >
                            {songs.map((music) => (
                                
                                    <div className={classes.music_row}>
                                        <div className={classes.musicIcon}  style={{ backgroundImage: `url(${"https://img.icons8.com/color/48/000000/music-robot.png"})` }}></div>
                                        <div className={classes.musicDetails}>
                                            <p key={music.id} className="music">{music.name}</p>
                                            <p key={music.id} className="music">{(music.duration_ms / 60000).toFixed(0) + ":" + (((music.duration_ms % 60000) / 1000).toFixed(0) < 10 ? "00" : ((music.duration_ms % 60000) / 1000).toFixed(0))
                                            }  </p>
                                            {/* <i class="fas fa-heart"></i> */}
                                        </div>
                                    </div>

                                
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classes.musicRight}>
                    <div className={classes.bgImg} style={{ backgroundImage: `url(${bg1})` }}></div>
                </div>
                {/* <Other /> */}
            </div>

        </>
    )
}
export default MusicList;