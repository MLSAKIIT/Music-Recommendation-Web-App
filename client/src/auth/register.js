import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";
import bgImage from './register.jpg';
import './register.css'


const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

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
    <div className="box" >
      <div className="box-left">
        <div className="register-box">
          <h1 className="large1" > Get Started</h1>
          <p className="lead1" >
          Find the latest and greatest type of music
          </p>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group" >
              <div className="icon">
                <i class='fas fa-user-alt'></i>
              </div>
              <input style={{ outline: 'none', border: 'none', borderBottom: '1.5px solid grey', backgroundColor: '#1d3536' }}
                type="text"
                placeholder=""
                name="name"
                value={name}
                onChange={onChange}
                required="required"
              />
              <span>Name</span>
            </div>
            <div className="form-group">
              <div className="icon">
                <i class="fa fa-envelope"></i>
              </div>
              <input style={{ outline: 'none', border: 'none', borderBottom: '1.5px solid grey', backgroundColor: '#1d3536;' }}
                type="email"
                placeholder=""
                name="email"
                value={email}
                onChange={onChange}
                required="required"
              />
              <span>Email Address</span>
            </div>
            <div className="form-group">
              <div className="icon">
                <i class='fas fa-lock'></i>
              </div>
              <input style={{ outline: 'none', border: 'none', borderBottom: '1.5px solid grey' }}
                type="password"
                placeholder=""
                name="password"
                value={password}
                onChange={onChange}
                required="required"
              />
              <span>Password</span>
            </div>
            <div className="form-group">
              <div className="icon">
                <i class='fas fa-key'></i>
              </div>
              <input style={{ outline: 'none', border: 'none', borderBottom: '1.5px solid grey' }}
                type="password"
                placeholder=""
                name="password2"
                value={password2}
                onChange={onChange}
                required="required"
              />
              <span>Confirm Password</span>
            </div>
            <div className="buttons1">
            <input type="submit" className="btn-primary1" value="Register" />
            <Link to="/login" className='btn-link' ><button className="btn-secondary1">Login</button></Link>
            </div>
            
          </form>
          {/* <p className="my-1" style={{ color: 'white' }}>
            Already have an account? <Link to="/login" className='' style={{ color: '#d4373e' }}>Sign In</Link>
          </p> */}
        </div>
      </div>
      <div className="box-right" style={{ backgroundImage: `url(${bgImage})` }}>
      </div>
    </div>
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
