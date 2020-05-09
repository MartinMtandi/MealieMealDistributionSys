import React, {useState,useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Button, Divider, ListItemText, Typography, TextField, Paper} from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { newFamily} from '../actions/familyActions';
import { connect, useSelector, useDispatch } from 'react-redux';
import FamilyView from './FamilyView'
import Alert from '@material-ui/lab/Alert'
import { clearErrors } from '../actions/errorActions'



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

export default function AddFamilyForm({ household }) { 

    useEffect(() => {
   
        const timer = setTimeout(() => {
         dispatch(clearErrors())
         
       }, 10000);
       return () => clearTimeout(timer);
         
       }
       , [])
    
    
    const dispatch = useDispatch();

   
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        phone: '',
        members: '',
      });

     
    
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(values)

        const family = {
            household_id: household,
            head: values.name,
            contact: values.phone,
            number_of_people:values.members

        }

        dispatch(newFamily(family))

        setValues({ ...values, 
            name: '',
        phone: '',
        members: '',
      });
      }
    
      const errors = useSelector(state => state.error.errors)
      const success = useSelector(state => state.error.success)
    
return(
    <Paper variant="outlined" className={classes.paper}>
         {errors && <Alert severity="error">{errors.message}</Alert>} 
        {success && <Alert severity="success">Family added</Alert>}
    {/**CREATE FORM TO CAPTURE FAMILY DETAILS */}
  <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
    <Typography style={{textAlign: 'center'}} variant="overline" display="block" gutterBottom>
        Add Family To Household
    </Typography>
        <TextField
            label="Head of Family"
            value={values.name} 
            onChange={handleChange('name')} 
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            label="Phone Number"
            type="number"
            value={values.phone} 
            onChange={handleChange('phone')} 
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            label="No. Of Family Members"
            type="number"
            value={values.members} 
            onChange={handleChange('members')} 
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
      <Button type="submit" size="small"variant="contained" color="primary" className={classes.margin}>Submit</Button>
  </form>
  </Paper>
)





}