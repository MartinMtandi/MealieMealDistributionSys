import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Button, Divider, ListItemText, Typography} from '@material-ui/core';
import Swal from 'sweetalert2';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

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
}));

export default function HouseholdsList() {
  const classes = useStyles();

  const handleClick = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Make Sale!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Account Debited!',
            'Sale has been made.',
            'success'
          )
        }
      })
  }

  const handleVerification = () => {
    Swal.fire({
        title: 'Enter ticket number',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Verify',
        showLoaderOnConfirm: true,
        //for testing purposes enter your github username to test what happens when you fireup this function
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Verification Successful!',
            'Ticket No. is valid',
            'success'
          )
        }
      })
  }

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="16125 Nkulumane 12"
          secondary={
            <React.Fragment>
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
              {" — 2 Weeks Ago"}<br/>
              <Button onClick={handleVerification}  size="small" variant="outlined" startIcon={<ErrorOutlineIcon />} className={classes.margin}>Verify Customer</Button>
              <Button onClick={handleClick}  size="small" variant="outlined" className={classes.margin}>Make Sale</Button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="8845 Nkulumane 12"
          secondary={
            <React.Fragment>
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
              {" — 1 month Ago"}<br />
              <Button onClick={handleVerification}  size="small" variant="outlined" startIcon={<ErrorOutlineIcon />} className={classes.margin}>Verify Customer</Button>
              <Button onClick={handleClick}  size="small" variant="outlined" className={classes.margin}>Make Sale</Button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="14367 Nkulumane 12"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Philani Nkiwane
              </Typography>
              {" — 0712344832"} <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inlinePadding}
                color="textPrimary"
              >
                Family Members
              </Typography>
              {" — 6"} <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inlinePadding}
                color="textPrimary"
              >
                Household
              </Typography>
              {" — C"} <br />
              <Typography
                component="span"
                variant="body2"
                className={classes.inlinePadding}
                color="textPrimary"
              >
                Created
              </Typography>
              {" — 1 Year Ago"}<br />
              <Button onClick={handleVerification}  size="small" variant="outlined" startIcon={<ErrorOutlineIcon />} className={classes.margin}>Verify Customer</Button>
              <Button onClick={handleClick}  size="small" variant="outlined" className={classes.margin}>Make Sale</Button>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
