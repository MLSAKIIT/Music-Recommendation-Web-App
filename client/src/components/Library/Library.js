import classes from "./Library.module.css";
import SideBar from "./SideBar";

import MusicList from "./MusicList";



const Library = () => {


 return (
   
    <body >

   
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
    </body>
  );
};

export default Library;
