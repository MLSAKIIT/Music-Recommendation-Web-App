import classes from "./SideBar.module.css";
import { Link } from "react-router-dom";


const SideBar = () => {
  return (

    <div className={classes.sideBar}>
      <div className={classes.logo}>
        <h1 className={classes.appName}><Link to="/library">μ-seak</Link></h1>
      </div>
      <div className={classes.content}>

        <ul>
          <li><Link to="/library"><i class="fas fa-home"></i> Home</Link></li>
          
          <li> <Link to="/Search"><i class="fas fa-search"></i> Search</Link></li>
          
          <li><Link to="/playlist"><i class="fas fa-music"></i> Playlist</Link></li>
          
          <li><Link to="#"><i class="fa fa-sign-out" style={{fontSize:'22px'}}></i>Logout</Link> </li>
          
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
