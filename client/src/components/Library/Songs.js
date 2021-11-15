import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

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
         
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDmUQLzuNSbg_b6636LuXi00a6PR03vO4o&type=audio&part=snippet&maxResults=5&q=${songname}`);
        setPlaylist(data.items);
        console.log(data.items);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
    return (
<div><div className="row">
    <div className="col-md-12">
        {playlist.map((data)=>(
            <div>
           
            <iframe title={data.id.videoId} width={"420"} height={"315"} src={`https://www.youtube.com/embed/${data.id.videoId}`} frameborder="0" allowfullscreen></iframe>
            </div>
        ))}
    </div>
    </div> </div>
    )
}
export default Songs;