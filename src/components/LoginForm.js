import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, IconButton, InputLabel, OutlinedInput,InputAdornment, FormControl, Typography, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from 'react-router-dom';

import Logo from '../images/ekhaya.png'

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    textField: {
        width: '90%',
    },
    button: {
        margin: theme.spacing(1),
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
    },
}));


function LoginForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = event => {
        event.preventDefault();
      };
    
    return (
        <div className={classes.root}>
           <div className="auth-card">
                <img src={Logo} alt="Logo" />
                <Paper elevation={3} className={classes.paper}>
                    <div>
                        <Typography variant="h6" gutterBottom>
                            Login
                        </Typography>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start"><MailOutlineIcon /></InputAdornment>}
                                labelWidth={45}
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                        </FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<LockOpenIcon />}
                        >
                            Sign In
                        </Button>
                    </div> 
                </Paper>
                <Link to="/" style={{color: '#fff', margin: '15px 0 50px 0', textDecoration: 'none'}}>Go Back</Link>
           </div>
        </div>
    )
}

export default LoginForm
