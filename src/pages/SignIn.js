import React from 'react';
import { Link } from 'react-router-dom';
import signInImg from '../img/signup-image.jpg';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';

const useStyle = makeStyles({
  field: {
    // backgroundColor: 'red',
    marginTop: 20,
  },
  btn: {
    marginTop: 30,
    display: 'block',
  },
  paper: {
    color: 'pink',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'f5f5f5',
    width: 850,
    height: 500,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'pink',
  },
  register: {
    // backgroundColor: 'red',
    width: 350,
    margin: 'auto',
  },
  signInImg: {
    margin: 'auto',
  },
  bold: {
    fontWeight: 400,
  },
  checkbox: {
    marginTop: 20,
  },
  // marginField: {
  //   backgroundColor: 'pink',
  // },
});

const SignIn = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={3} sm={12}>
          <Grid item className={classes.signInImg}>
            <img src={signInImg} alt="img" />
            <Typography align="center" variant="body1" color="secondary">
              <Link to="/register">Create an account</Link>
            </Typography>
          </Grid>
          <Grid item className={classes.register}>
            <Typography variant="h2" className={classes.bold}>
              Sign in
            </Typography>
            <form className={classes.field} noValidate autoComplete="off">
              <TextField
                className={classes.marginField}
                fullWidth
                id="standard-basic"
                label="Your name"
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermIdentityIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                id="standard-basic"
                label="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
                className={classes.checkbox}
              />
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                Sign in
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignIn;
