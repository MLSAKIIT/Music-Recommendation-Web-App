import classes from "./SideBar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const SideBar = ({ auth: { isAuthenticated }, logout }) => {
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
          
          <li><Link to="/" onClick={logout}><i class="fa fa-sign-out" style={{fontSize:'22px'}}></i>Logout</Link> </li>
          
        </ul>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(SideBar);
