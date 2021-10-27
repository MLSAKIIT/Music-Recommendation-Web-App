import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <span>Library</span>
      <div className={classes.content}>
        <a href="/home">Temp_Home</a>
        <a href="/playlist">Temp_Playlist</a>
        <a href="/artists">Temp_Artist</a>
        <a href="/favourite">Temp_Favourite</a>
      </div>
    </div>
  );
};

export default SideBar;
