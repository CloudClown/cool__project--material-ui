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
import InputAdornment from '@material-ui/core/InputAdornment';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
  marginLabel: {
    marginBottom: 10,
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
              <TextField
                className={classes.marginLabel}
                fullWidth
                id="standard-basic"
                label="Your name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermIdentityIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.marginLabel}
                fullWidth
                id="standard-basic"
                label="Your Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.marginLabel}
                fullWidth
                id="standard-basic"
                label="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                id="standard-basic"
                label="Repeat your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
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
