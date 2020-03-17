import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, Typography, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));


function LoginForm() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <div id="auth-card">
                <Paper elevation={3} style={{padding: '10px'}}>
                    <div>
                        <Typography variant="h6" gutterBottom>
                            Login
                        </Typography>
                        <TextField
                            id="outlined-full-width"
                            label="Email"
                            placeholder="Enter Email"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
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
