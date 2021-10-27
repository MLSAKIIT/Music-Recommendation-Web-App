import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <span>Library</span>
      <div className={classes.content}>
        <a href="/home">Home</a>
        <a href="/playlist">Playlist</a>
        <a href="/artists">Artist</a>
        <a href="/favourite">Favourite</a>
      </div>
    </div>
  );
};

export default SideBar;
