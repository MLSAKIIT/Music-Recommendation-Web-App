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
        <h1 className="large" > Sign Up</h1>
        <p className="lead" >
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group" >
            <input  style={{ outline: 'none', border: 'none', borderBottom: '1.5px solid grey' }}
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input style={{ outline: 'none', border: 'none', borderBottom: '1.5px solid grey' }}
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input style={{ outline: 'none', border: 'none', borderBottom: '1.5px solid grey' }}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input style={{ outline: 'none', border: 'none', borderBottom: '1.5px solid grey' }}
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn" style={{ backgroundColor: '#d4373e', color: 'white' }} value="Register" />
  
        </form>
        <p className="my-1" style={{ color: 'white' }}>
          Already have an account? <Link to="/login" className='' style={{ color: '#d4373e' }}>Sign In</Link>
        </p>
        </div>
      </div>
      <div className="box-right" style={{backgroundImage: `url(${bgImage})` }}>
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
