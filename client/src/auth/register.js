import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";
import bgImage from "./register.jpg";
import "./register.css";
import "./login.css"
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Navbar from './../components/Navbar/Navbar';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealCnfPwd, setIsRevealCnfPwd] = useState(false);
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };



  if (isAuthenticated) {
    return <Redirect to="/artists" />;
  }

  return (
    <>
    {/* <Navbar/> */}
    <div className="box" >
      <div className="box-left">
        <div className="logo">
        <Link to="/">
            <h3>μ-seak</h3>
          </Link>
        </div>
        <div className="register-box">
          <h1 className="large1"> GET STARTED</h1>
          <p className="lead1">Find the latest and greatest type of music</p>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group adjust" >
              <div className="icon">
                <i class="fas fa-user-alt"></i>
              </div>
              <input className="val" style={{ paddingTop:"12px", outline: 'none', border: 'none', borderBottom: '1.5px solid grey',borderRadius:'0%',backgroundColor: '#1d3536' }}
                type="text"
                placeholder="Full Name"
                name="name"
                value={name}
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="form-group adjust">
              <div className="icon">
                <i class="fa fa-envelope"></i>
              </div>
              <input style={{paddingTop:"12px", outline: 'none', border: 'none', borderBottom: '1.5px solid grey', backgroundColor: '#1d3536;' }}
                type="email"
                placeholder="E-mail"
                name="email"
                value={email}
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="form-group">
              <div className="icon">
                <i class="fas fa-lock"></i>
              </div>
              <input style={{paddingTop:"12px", outline: 'none', border: 'none',borderRadius:'0%', borderBottom: '1.5px solid grey' }}
               type={isRevealPwd ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                required="required"
              />
              <div
                style={{ paddingTop: "12px" }}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              >
                {isRevealPwd ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className="form-group">
              <div className="icon">
                <i class="fas fa-key"></i>
              </div>
              <input style={{ paddingTop:"12px",outline: 'none', border: 'none',borderRadius:'0%', borderBottom: '1.5px solid grey' }}
               type={isRevealCnfPwd ? "text" : "password"}
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={onChange}
                required="required"
              />
            <div  style={{paddingTop:'12px', marginReft: '5px'}} onClick={() => setIsRevealCnfPwd(prevState => !prevState)}>
                {isRevealCnfPwd?  <VisibilityIcon />:<VisibilityOffIcon/> }
              </div>
            </div>
            <div className="submit-button">
              <div className="buttons1">
                <input
                  type="submit"
                  className="btn-primary1"
                  value="Register"
                />
                <Link to="/" className="btn-link">
                  <button className="btn-secondary1">Login</button>
                </Link>
              </div>
              <div className="divider">
                <hr></hr>
                <p>OR</p>
                <hr></hr>
              </div>
              <Link to="/loginSawo">
                <button
                  className="btn-primary1 sawo-button"
                  style={{ margin: "auto" }}
                >
                  Log-in with SAWO LABS
                </button>
              </Link>
            </div>
          </form>
          {/* <p className="my-1" style={{ color: 'white' }}>
            Already have an account? <Link to="/login" className='' style={{ color: '#d4373e' }}>Sign In</Link>
          </p> */}
        </div>
      </div>
      <div
        className="box-right img-fluid"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </div>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
// var user_name=payload.email;
// user_name  = user_name.substring(0, user_name.lastIndexOf("@"));