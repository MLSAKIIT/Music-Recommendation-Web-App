import classes from "./SideBar.module.css";
import Divider from '@mui/material/Divider';


const SideBar = () => {
  return (

    <div className={classes.sideBar}>
      <div className={classes.logo}>
        <h1 className={classes.appName}>μ-seak</h1>
      </div>
      {/* <span>Library</span> */}
      <div className={classes.content}>

        <ul>
          <li><a href="/library"><i class="fas fa-home"></i> Home</a></li>
          {/* <Divider /> */}
          <li><a href="/playlist"><i class="fas fa-music"></i> Playlist</a></li>
          {/* <Divider /> */}
          <li> <a href="/ArtistsSearch"><i class="fas fa-user"></i> Artist</a></li>
          {/* <Divider /> */}
          <li><a href="/favourite"><i class="fas fa-heart"></i> Favourite</a> </li>
          {/* <Divider /> */}
        </ul>
        {/* <a href="/home">Home</a>
        <a href="/playlist">Playlist</a>
        <a href="/artists">Artist</a>
        <a href="/favourite">Favourite</a> */}
      </div>
    </div>
  );
};

export default SideBar;
