import classes from "./Library.module.css";
import SideBar from "./SideBar";
import Main from "./Main";
import AudioPlayer from "./AudioPlayer";
import MusicList from "./MusicList";
import Other from "./Other";

const Library = () => {
  return (
    <div className={classes.library}>
      <div className={classes.row}>
        <SideBar />
        <div className={classes.content}>
          {/* <Main className={classes.main} /> */}
          <MusicList className={classes.musicList} />
          
        </div>
      </div>
      {/* <AudioPlayer /> */}
    </div>
  );
};

export default Library;
