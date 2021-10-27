import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import bgImage from "./register.jpg";
import "./register.css";
import "./login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Container } from "@mui/material";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/library" />;
  }

  return (
    <div className="box">
      <div className="box-left">
        <div className="login-box">
          <h1 className="large1">WELCOME BACK</h1>
          <p className="lead1">Login into your account</p>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group adjust">
              <div className="icon">
                <i class="fa fa-envelope"></i>
              </div>
              <input style={{ paddingTop: "15px", outline: 'none', border: 'none', borderBottom: '1.5px solid grey' }}
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
              <input style={{ paddingTop: "15px", borderRadius: '0%', outline: 'none', border: 'none', borderBottom: '1.5px solid grey' }}
                type={isRevealPwd ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
                required="required"
              />
              <div className={Container} style={{ paddingTop: "12px" }} onClick={() => setIsRevealPwd(prevState => !prevState)}>
                {isRevealPwd ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className="submit-button">
              <div className="buttons1">
                <input type="submit" className="btn-primary1" value="Login" />
                <Link to="/register">
                  <button className="btn-secondary1">Create Account</button>
                </Link>
              </div>
              <div className="divider">
                <hr></hr>
                <p>or</p>
                <hr></hr>
              </div>
              <Link to="/loginSawo">
                <button
                  className="btn-primary1 sawo-button"
                  style={{ margin: "auto"}}
                >
          
                <span> Log-in with SAWO LABS</span> 
                
                </button>
              </Link>
            </div>
          </form>
          {/* <p className="my-1" style={{ color: 'white' }}>
            Don't have an account? <Link to="/register" style={{ color: '#d4373e' }}>Sign Up</Link>
          </p> */}
        </div>
      </div>
      <div
        className="box-right"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
//test
