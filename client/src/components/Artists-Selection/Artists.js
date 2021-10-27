/* eslint-disable array-callback-return */
import React, { useState } from "react";
import artistsName from "../../data/artists"
import Button from "./ArtistsButton";
import './ArtistsButton.css'
import ArtistsSendData from './ArtistsSendData';

function Artists() {
    const[searchTerm,setSearchTerm]=useState('');
  const [AR, setAR] = useState([]);
  const onclickHandler = (id, active) => {
    if (active) {
      setAR((prevState) => [...new Set([ ...prevState,id])]);
    } else {
      setAR((prevState) => {
        return prevState.filter((i) => i !== id);
      });
    }
    console.log(AR);
  };

  let an = artistsName.filter((ar) => ar.id <=500 ).filter((ar)=>
  {
      if(searchTerm==="")
      return ar;
      else if(ar.artists.toLowerCase().includes(searchTerm.toLowerCase()))
      {
          return ar;
      }

  });

  
  let content = an.map((artist) => (
    <Button
      onclick={onclickHandler}
      title={artist.artists}
      id={artist.id}
      key={artist.id}
    />
  ));

  console.log(AR);
  return (
    <div  >
        <h1 className="heading" >CHOOSE YOUR FAVOURITE ARTISTS 
        <ArtistsSendData data={AR} />
       </h1>
       
        <div className="searchbtn">
            
        <input className="searchInput" type="text" name="search" placeholder="Search.." onChange={(event)=>{
          setSearchTerm(event.target.value);  
        }}/>
       </div>
        <div>{content}</div>
  
    </div>
  );
}

export default Artists;