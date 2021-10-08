import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className='home-content'>
      <h1 style={{fontSize: '5em', color: 'skyblue'}}>Welcome</h1>
      <div className={classes.root}>
        <Link to="/login">
          <Button variant="contained" style={{backgroundColor: '#ff00007d', color: 'white'}}>
            Log In
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="contained" style={{backgroundColor: '#ff00007d', color: 'white'}}>
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
