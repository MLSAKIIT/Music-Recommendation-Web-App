import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logout } from "../../actions/auth";
import "./Navbar.css";


const Navbar = ({ auth: { isAuthenticated }, logout }) => {

  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
     
      </li>
      <li className="nav-item">
    
      </li>
      <li className="nav-item">
        <a href="/" onClick={logout} className="nav-link">
          {/* <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '} */}
          Logout
        </a>
      </li>
    </ul>
  );


  return (
   
    <nav className= "navbar navbar-inner">
      <div className="container">
        <Link className= "navbar-brand" to="/">
          <span style={{fontSize: '1.5em', fontWeight: '400'}}>μ</span>-Seak
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          {isAuthenticated ? authLinks : null}
        </div>
      </div>
    </nav>

  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
