import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, InputLabel, OutlinedInput,InputAdornment, FormControl, Typography, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    }
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
           <div id="auth-card">
                <Paper elevation={3} className={classes.paper}>
                    <div>
                        <Typography variant="h6" gutterBottom>
                            Login
                        </Typography>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.amount}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start"><MailOutlineIcon /></InputAdornment>}
                            labelWidth={60}
                        />
                        </FormControl>
                        <TextField
                            id="outlined-full-width"
                            label="Password"
                            placeholder="Enter Password"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<LockOpenIcon />}
                        >
                            Sign In
                        </Button>
                    </div> 
                </Paper>
           </div>
        </div>
    )
}

export default LoginForm
