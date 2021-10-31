import classes from './MusicList.module.css';
import React from 'react'
import songs from './../../data/songs-sampledataset';
import { useRef } from 'react'
const MusicList = () => {
    const titleRef = useRef();
    return (
        <>
        {/* var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds; */}
  <div className={classes.container}>
  <h2 className={classes.title} style={{color:"white" ,alignItems:"flex-start" ,justifyContent:"flex-start",paddingTop:"25px",paddingLeft:"30px"}}>[Specialized Playlist]</h2>
            <div className={classes.content} ref={titleRef}>
             <div className={classes.contentrow}>
                {songs.map((music) => (
                    <div className={classes.music_row}>
                        <p key={music.id} className="music">{music.name}</p>
                        <p key={music.id} className="music">{(music.duration_ms / 60000).toFixed(0)+":"+(((music.duration_ms%60000)/1000).toFixed(0)<10?"00":((music.duration_ms%60000)/1000).toFixed(0))
                        }</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </>
    )
}
export default MusicList;