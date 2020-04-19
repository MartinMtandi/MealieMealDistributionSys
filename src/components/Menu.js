import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Grid, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';

import Logo from '../images/ekhaya.png'
import Queue from '../images/people.svg'
import Distribution from '../images/distribution.svg'
import Blower from '../images/blower.svg'
import Payment from '../images/payment.svg'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    grid: {
        padding: theme.spacing(2),
    }
  })
);

function Menu() {
    const classes = useStyles();
    return (
        <div className="auth-card">
            <img style={{marginTop: '50px'}} src={Logo} alt="Logo" />
            <Grid container classname={classes.grid}>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper elevation="3" className={classes.paper}>
                        <img src={Queue} alt="upcoming schedule"  height="80px"/>
                        <Typography variant="h6" gutterBottom>
                            Upcoming <br /> Schedule
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper elevation="3" className={classes.paper}>
                        <img src={Distribution} alt="distribution" height="80px"/>
                        <Typography variant="h6" gutterBottom>
                            Distribution <br /> Logs
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper elevation="3" className={classes.paper}>
                        <img src={Payment}  alt="Make Mobile Payment" height="80px"/>
                        <Typography variant="h6" gutterBottom>
                            Make <br /> Payment
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper elevation="3" className={classes.paper}>
                        <img src={Blower}  alt="whistle blower" height="80px"/>
                        <Typography variant="h6" gutterBottom>
                            Whistle <br /> Blow
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Link to="/login" style={{color: '#fff', margin: '15px 0 50px 0', textDecoration: 'none'}}>Login as Admin</Link>
        </div>
    )
}

export default Menu
