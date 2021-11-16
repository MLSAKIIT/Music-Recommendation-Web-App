import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { grid, Row, Col } from 'react-bootstrap';
import classes from './Songs.module.css'
import SideBar from "./SideBar";
const Songs = () => {

  const [playlist, setPlaylist] = useState([]);
  const { songname } = useParams();
  //  useEffect(()=>{
  //     axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDmUQLzuNSbg_b6636LuXi00a6PR03vO4o&type=audio&part=snippet&maxResults=10&q=ily`).then(
  //         (data)=>{
  //         setPlaylist(data.data.items);
  //         console.log(playlist);
  //         }
  //       )
  //  },[])
  useEffect(() => {
    const fetch = async () => {

      setPlaylist([]);
      try {

        // const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDmUQLzuNSbg_b6636LuXi00a6PR03vO4o&type=audio&part=snippet&maxResults=5&q=${songname}`);
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDaJlfCMDG4kQKEIfUoT1wgP5MAT10eFH4&type=audio&part=snippet&maxResults=5&q=${songname}`);
        setPlaylist(data.items);
        console.log(data.items);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <div className={classes.songsContainer}>
      <div className={classes.row}>
        <SideBar />
        <div className={classes.content}>
          {/* <Row className="d-flex justify-content-md-center"> */}

            {/* <Col xs lg="3"> */}
              <div className={classes.cards}> {playlist.map((data) => (
              // <div >
                <iframe title={data.id.videoId}  src={`https://www.youtube.com/embed/${data.id.videoId}`} frameborder="0" allowfullscreen></iframe>
              // </div>
            ))}</div>
            {/* </Col> */}

          {/* </Row> */}
        </div>
      </div>
    </div>
  )
}
export default Songs;