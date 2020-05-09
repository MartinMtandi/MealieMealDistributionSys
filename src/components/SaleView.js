import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Button, Divider, ListItemText, Typography} from '@material-ui/core';
import Swal from 'sweetalert2';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckIcon from '@material-ui/icons/Check';
import { newSale } from '../actions/saleActions';

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
}));


export default function SaleView({id,address, ward,head,identifier,ticket_number,members,phone}) {
    const classes = useStyles();

    const [verified, setVerified] = useState(false)
    const [sold, setSold] = useState(false)
    const dispatch = useDispatch();

    const handleSubmit = () => {
        
        const sale = {
            schedule_id:id
        }
        dispatch(newSale(sale))
      
    }
    
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
              ).then(
                  handleSubmit
              ).then(
                setSold(true)
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
           /*  preConfirm: (login) => {
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
            }, */
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.value==ticket_number) {
              Swal.fire(
                'Verification Successful!',
                'Ticket No. is valid',
                'success'
              ).then(
                  setVerified(true)
              )
              }
            else {
                Swal.fire(
                    'Verification Failed!',
                    'Ticket No. is not valid',
                    'error'
                  )
              }
          })
      }
    


    return (
<React.Fragment>        
<ListItem alignItems="flex-start">   
<ListItemText
                    primary={address + "Nkulumane"} //"16125 Nkulumane 12"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {head}
                            </Typography>
                            {" - " + phone} <br />
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inlinePadding}
                                color="textPrimary"
                            >
                                {"Family Members"}
                            </Typography>
                            {" - " + members} <br />
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inlinePadding}
                                color="textPrimary"
                            >
                                Family
              </Typography>
                            {" - " + identifier} <br />
              
                            {verified ?
                                <Button disabled size="small" variant="outlined" startIcon={<CheckIcon />} className={classes.margin}>Verified</Button>
                                :
                                <Button onClick={handleVerification} size="small" variant="outlined" startIcon={<ErrorOutlineIcon />} className={classes.margin}>Verify Customer</Button>}
                            {sold ?
                                <Button disabled size="small" variant="outlined" className={classes.margin}>Sold</Button>
                                :
                            <React.Fragment>
                                {verified?
                                 < Button onClick={handleClick} size="small" variant="outlined" className={classes.margin}>Make Sale</Button>
                                :
                < Button disabled size="small" variant="outlined" className={classes.margin}>Make Sale</Button>
     
                                    }
                                    </React.Fragment>
          
          }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      </React.Fragment>


)}

