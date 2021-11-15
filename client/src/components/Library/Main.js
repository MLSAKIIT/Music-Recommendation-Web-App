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

      <input className={classes.searchBar} type='search'
      placeholder="Search for any tracks here"
      />
      </div>
     </Fragment>
     </>

  );
};
export default Main;
