import classes from "./Library.module.css";
import SideBar from "./SideBar";
import Main from "./Main";

const Library = () => {
  return (
    <div className={classes.library}>
      <SideBar />
      <Main className={classes.main} />
    </div>
  );
};

export default Library;

/*
git pull origin main
git push origin <branch>
*/
