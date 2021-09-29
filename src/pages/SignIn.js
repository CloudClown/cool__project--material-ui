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

const useStyle = makeStyles({
  field: {
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
  },
  paper: {
    color: 'pink',
    // marginTop: 250,
    // marginLeft: 450,
    // margin: 'auto',
    // alignItem: 'center',
    // justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'f5f5f5',
    width: 850,
    height: 500,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
});

const SignIn = () => {
  const classes = useStyle();

  return (
    <div className={classes.center}>
      <Paper className={classes.paper}>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item>
            <img src={signInImg} alt="img" />
            <Typography variant="body1" color="secondary">
              <Link to="/register">Create an account</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2">Sign in</Typography>
            <form className={classes.field} noValidate autoComplete="off">
              <TextField fullWidth id="standard-basic" label="e-mail" />
              <TextField fullWidth id="standard-basic" label="password" />

              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignIn;
