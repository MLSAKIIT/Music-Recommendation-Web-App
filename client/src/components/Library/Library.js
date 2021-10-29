import classes from "./Library.module.css";
import SideBar from "./SideBar";
import Main from "./Main";
import AudioPlayer from "./AudioPlayer";
import MusicList from "./MusicList";

const Library = () => {
  return (
    <div className={classes.library}>
      <SideBar />
      <Main className={classes.main} />
      <AudioPlayer  />
      <MusicList/>
    </div>
  );
};

export default Library;
