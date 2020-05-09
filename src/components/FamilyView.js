import React, {useState,useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Button, Divider, ListItemText, Typography, TextField, Paper} from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { fetchHouseholds } from '../actions/householdActions';
import { connect, useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
      textTransform: 'uppercase'
    },
    inlinePadding: {
      display: 'inline',
      marginLeft: '3ch'
    },
    margin: {
      margin: theme.spacing(1),
    },
    form: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1, 3, 1, 1)
    }
  }));

  
export default function FamilyView({identifier,head, phone, members}) {
    
    const classes = useStyles();

return(
    <React.Fragment>
   
        
<Typography
      component="span"
      variant="body2"
      className={classes.inline}
      color="textPrimary"
    >
      {head}
    </Typography>
    {" "+ phone} <br />
    <Typography
      component="span"
      variant="body2"
      className={classes.inlinePadding}
      color="textPrimary"
    >
      {"Members"}
    </Typography>
        {" "+ members} <br />
        

    <Typography
      component="span"
      variant="body2"
      className={classes.inlinePadding}
      color="textPrimary"
    >
    Family
    </Typography>
        {" "+ identifier} <br />
  
    </React.Fragment>

      
        
    

)









}