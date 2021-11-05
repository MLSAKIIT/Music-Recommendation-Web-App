import classes from './MusicList.module.css';
import React from 'react'
import songs from './../../data/songs-sampledataset';
import bg from "./assets/homeBg.png"
import iconImg from "./assets/happyrock.png"
import Other from './Other';
import { useRef } from 'react'
const MusicList = () => {
    const titleRef = useRef();
    return (
        <>
            {/* var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds; */}
            <div className={classes.container}>
                <div className={classes.musicLeft}>
                    <h2 className={classes.title} style={{ color: "white", alignItems: "flex-start", justifyContent: "flex-start", paddingTop: "25px", paddingLeft: "30px" }}>[Specialized Playlist]</h2>
                    <div className={classes.content} ref={titleRef}>

                        <div className={classes.contentrow}>
                            {songs.map((music) => (
                                
                                    <div className={classes.music_row}>
                                        <div className={classes.musicIcon}  style={{ backgroundImage: `url(${"https://cdn.dribbble.com/users/437315/screenshots/16696349/media/ca40a9e2ef151c22fbeb93677964774b.jpg?compress=1&resize=1600x1200"})` }}></div>
                                        <div className={classes.musicDetails}>
                                            <p key={music.id} className="music">{music.name}</p>
                                            <p key={music.id} className="music">{(music.duration_ms / 60000).toFixed(0) + ":" + (((music.duration_ms % 60000) / 1000).toFixed(0) < 10 ? "00" : ((music.duration_ms % 60000) / 1000).toFixed(0))
                                            }  <i class="fas fa-heart"></i></p>
                                        </div>
                                    </div>

                                
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classes.musicRight}>
                    <div className={classes.bgImg} style={{ backgroundImage: `url(${bg})` }}></div>
                </div>
                {/* <Other /> */}
            </div>

        </>
    )
}
export default MusicList;