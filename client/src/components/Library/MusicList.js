import classes from './MusicList.module.css';
import React from 'react'
import songs from './../../data/songs-sampledataset';
import bg from "./assets/homeBg.png"
import bg1 from "./assets/bg1.png";
import iconImg from "./assets/happyrock.png"
import Other from './Other';
import { useRef,useState,useEffect } from 'react'
import axios from 'axios';
// import Navbar from '../Navbar/Navbar'

const MusicList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
      setLoading(true);
      fetch("https://api-for-music-rec.pratyushpatnai2.repl.co/?name=memories")
        .then((res) => res.json())
        .then((data) => {
       
          const result = Object.values(data);
       console.log(result);
       setData(result);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

   

    const titleRef = useRef();
    if (loading) {
        return <p>Data is loading...</p>;
      }
      if (error|| !Array.isArray(data)) {
        return <p>There was an error loading your data!</p>;
      }
    return (
        <>

            <div className={classes.container}>
                {/* <Navbar/> */}
                <div className={classes.musicLeft}>
                    <h2 className={classes.title} style={{ color: "white", alignItems: "flex-start", justifyContent: "flex-start", fontSize: '30px',paddingTop: "20px", paddingLeft: "30px" }}>Let the Music Speak</h2>
                    <div className={classes.content} ref={titleRef}>

                        <div className={classes.contentrow} >
                        
                            {data.map((music) => (
                               
                                    <div className={classes.music_row}>
                                        <div className={classes.musicIcon}  style={{ backgroundImage: `url(${"https://img.icons8.com/color/48/000000/music-robot.png"})` }}></div>
                                        <div className={classes.musicDetails}> <a href={`/library/${music.name}`}>
                                            <p key={`${music.name+music.artist}`} className="music">{music.name}</p></a>
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