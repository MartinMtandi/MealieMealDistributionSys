import React, {useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Button, Divider, ListItemText, Typography, TextField, Paper} from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';

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

export default function HouseholdsList() {
  const classes = useStyles();

  const [count, setCount] = useState(0);
  const [family, setFamily] = useState('');

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
  }

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="16125 Nkulumane 12, Ward 20- Coolland"
          secondary={
            <React.Fragment>
              {(family === '16125') && <Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Melusi Sibanda
              </Typography>
              {" — 0775412662"} <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inlinePadding}
                color="textPrimary"
              >
                Family Members
              </Typography>
              {" — 2"} <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inlinePadding}
                color="textPrimary"
              >
                Household
              </Typography>
              {" — B"} <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inlinePadding}
                color="textPrimary"
              >
                Created
              </Typography>
              {" — 2 Weeks Ago"}</Fragment>}<br/>
              {(count === 1) && 
              <Paper variant="outlined" className={classes.paper}>
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
              </Paper>}<React.Fragment>
                {(family === '16125') ? <Button size="small" variant="outlined" startIcon={<VisibilityIcon />} className={classes.margin} onClick={() => setFamily('')}>Clear Family</Button> : <Button size="small" variant="outlined" startIcon={<VisibilityIcon />} className={classes.margin} onClick={() => setFamily('16125')}>View Family</Button>}
                {(count === 0) ? <Button size="small" variant="outlined" startIcon={<GroupAddIcon />} className={classes.margin} onClick={() => setCount(1)}>Add Family</Button> : <Button size="small" variant="outlined" startIcon={<GroupAddIcon />} className={classes.margin} onClick={() => setCount(0)}>Clear Family</Button>}
              </React.Fragment>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="8845 Nkulumane 12, Ward 21- Manemo"
          secondary={
            <React.Fragment>
              {(family === '8845') && <Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Alice Chigomba
              </Typography>
              {" — 0772113862"} <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inlinePadding}
                color="textPrimary"
              >
                Family Members
              </Typography>
              {" — 4"} <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inlinePadding}
                color="textPrimary"
              >
                Household
              </Typography>
              {" — A"} <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inlinePadding}
                color="textPrimary"
              >
                Created
              </Typography>
              {" — 1 month Ago"}
                </Fragment>}
              <br />
              {(count === 2) && 
              <Paper variant="outlined" className={classes.paper}>
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
              </Paper>}<React.Fragment>
                {(family === '8845') ? <Button size="small" variant="outlined" startIcon={<VisibilityIcon />} className={classes.margin} onClick={() => setFamily('')}>Clear Family</Button> : <Button size="small" variant="outlined" startIcon={<VisibilityIcon />} className={classes.margin} onClick={() => setFamily('8845')}>View Family</Button>}
                {(count === 0) ? <Button size="small" variant="outlined" startIcon={<GroupAddIcon />} className={classes.margin} onClick={() => setCount(2)}>Add Family</Button> : <Button size="small" variant="outlined" startIcon={<GroupAddIcon />} className={classes.margin} onClick={() => setCount(0)}>Clear Family</Button>}
              </React.Fragment>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
