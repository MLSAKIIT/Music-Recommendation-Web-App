import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import {grid ,Row,Col} from 'react-bootstrap';
import SideBar from "./SideBar";
const Songs=()=>{

    const [playlist,setPlaylist]=useState([]);
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
         
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDqDk0PyWS7cosWtgRavcZYgC4MIgttNcM&type=audio&part=snippet&maxResults=5&q=${songname}`);
        setPlaylist(data.items);
        console.log(data.items);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
    return (
<div>
   
<Row className="justify-content-md-center">
  
    <Col  xs lg="2"> {playlist.map((data)=>(
            <div>
            
            <iframe title={data.id.videoId} width={"420"} height={"315"} src={`https://www.youtube.com/embed/${data.id.videoId}`} frameborder="0" allowfullscreen></iframe>
            </div>
        ))}</Col>
  
  </Row>
       
    </div>
    )
}
export default Songs;