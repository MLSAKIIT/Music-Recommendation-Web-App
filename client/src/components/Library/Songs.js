import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import classes from './Songs.module.css'
import SideBar from "./SideBar";
import Loader from "react-loader-spinner";
import Alert from '@mui/material/Alert';

const Songs = () => {

  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { songname } = useParams();
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {

      setPlaylist([]);
      try {
        // const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDmUQLzuNSbg_b6636LuXi00a6PR03vO4o&type=audio&part=snippet&maxResults=5&q=${songname}`);
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDaJlfCMDG4kQKEIfUoT1wgP5MAT10eFH4&type=audio&part=snippet&maxResults=6&q=${songname}`);
        setPlaylist(data.items);
        console.log(data.items);
      } catch (err) {
        setError(err);
        console.error(err);
      }
      finally{
          setLoading(false);
    };
  }
    fetch();
  }, []);
  if (error) {
    const style ={ position: "fixed", top: "50%", left: "60%", transform: "translate(-50%, -50%)" };
    return <div style={style}><Alert severity="error">Oops something went wrong there!</Alert></div>;
  }
  if (loading) {
    const style ={ position: "fixed", top: "50%", left: "60%", transform: "translate(-50%, -50%)" };
      return <div style={style}><Loader type="Audio" color="#2EE59D" height={50} width={50}  /></div>;
    }
  return (
    <div className={classes.songsContainer}>
      <div className={classes.row}>
        <SideBar />
        <div className={classes.content}>
              <div className={classes.cards}> {playlist.map((data) => (   
                <iframe title={data.id.videoId}  src={`https://www.youtube.com/embed/${data.id.videoId}`} frameborder="0" allowfullscreen></iframe>
            ))}</div>   
        </div>
      </div>
    </div>
  )
}
export default Songs;