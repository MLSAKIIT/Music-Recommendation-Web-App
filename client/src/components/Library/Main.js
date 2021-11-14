import {Fragment,useState} from "react";
import classes from "./Main.module.css";
// import axios from 'axios';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import MusicList from "./MusicList";




const Main = () => {

  return (
    <>
    <Fragment>

    
      <div className={classes.searchInputWrapper}>
      
      <input className={classes.searchBar} 
      placeholder="Search for any tracks here" 
      onKeyDown={handlesubmit}  
      />
      </div>  

        {/* rendering the data here */}
     {/* {show? */}
     {/* <div>
    <ImageList sx={{ width: 700, height: 1000 ,padding:"20px"}}>
      {data.map((item, index) => (
        <ImageListItem sx={{padding:"10px"}} key={`${item.id}`  }>
         
         
           <img
            src={`${item.album.images[1].url}`}
            width={"5px"}
            height={"5px"}
            alt={item.album.name}
            loading="lazy"
          /> 
          <ImageListItemBar sx={{color:"white"}}
            title={item.album.name}
            subtitle={<span>By : {item.album.artists[0].name}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>   </div> */}

     {/* :<MusicList/> (Remove) */} 
    
      {/* } */}



      <div className={classes.searchInputWrapper}>

      <input className={classes.searchBar} type='search'
      placeholder="Search for any tracks here"
      />
      </div>
     </Fragment>
     </>

  );
};
export default Main;
