import { Fragment, useState,useEffect } from "react";
import classes from "./Search.module.css";
import axios from 'axios';
import SideBar from "./SideBar";

import classess from "./Main.module.css";
import {Row,Col} from 'react-bootstrap';

const Search = () => {

    const [playlist,setPlaylist]=useState([]);
const fetch = async (e) => {
            if(e!==""||e!==" ")
             {
                  setPlaylist([]);
                  try {
                     
                    const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDqDk0PyWS7cosWtgRavcZYgC4MIgttNcM&type=video&part=snippet&maxResults=5&q=${e}`);
                    setPlaylist(data.items);
                    console.log(data.items);
                  } catch (err) {
                    console.error(err);
                  }
             }
             else
             {
                setPlaylist([]);
               
             }
                   
                };
    function handlesubmit(e)
    { 

        if(e.key==='Enter')
        {
   fetch(e.target.value);
        }
     
            
    }
    return (
        <div className={classes.search}>
            <div className={classes.row}>
                <SideBar />
                <div className={classes.content}>
                  
                <div className={classes.searchInputWrapper}>

<input className={classess.searchBar} type='search'
placeholder="Search for any tracks here"
onKeyDown={handlesubmit}
/>
</div>
<Row className="justify-content-md-center">
  
    <Col  xs lg="2"> {playlist.map((data)=>(
            <div>
            
            <iframe title={data.id.videoId} width={"420"} height={"315"} src={`https://www.youtube.com/embed/${data.id.videoId}`} frameborder="0" allowfullscreen></iframe>
            </div>
        ))}</Col>
  
  </Row>
                    
                </div>
            </div>

        </div>

      

    );
};
export default Search;
