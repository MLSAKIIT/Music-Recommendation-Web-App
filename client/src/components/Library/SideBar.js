import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <span>Library</span>
      <div className={classes.content}>
        <a href="#">Temp_Home</a>
        <a href="#">Temp_Playlist</a>
        <a href="#">Temp_Artist</a>
        <a href="#">Temp_album</a>
        <a href="#">Temp_Favourite</a>
        <a href="#">Temp_All_Songs</a>
      </div>
    </div>
  );
};

export default SideBar;
