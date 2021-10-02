import React from 'react';
import { Link } from 'react-router-dom';
import register from '../img/register-image.jpg';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyle = makeStyles({
  field: {
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
    display: 'block',
  },
  checkbox: {
    marginTop: 20,
    width: '550px',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    height: '100vh',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'f5f5f5',
    width: 850,
    height: 500,
  },
  register: {
    width: 350,
    margin: 'auto',
  },
});

const Register = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={3} direction="row">
          <Grid item className={classes.register}>
            <Typography variant="h2">Sign Up</Typography>
            <form className={classes.field} noValidate autoComplete="off">
              <TextField fullWidth id="standard-basic" label="Your name" />
              <TextField fullWidth id="standard-basic" label="Your Email" />
              <TextField fullWidth id="standard-basic" label="Password" />
              <TextField
                fullWidth
                id="standard-basic"
                label="Repeat your password"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I agree all statements in Terms of service
                me"
                className={classes.checkbox}
              />
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </form>
          </Grid>
          <Grid item>
            <img src={register} alt="img" />
            <Typography align="center" variant="body1" color="secondary">
              <Link to="/signin">I am already member</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Register;
