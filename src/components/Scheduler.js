import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Container, CssBaseline, Avatar, ListItemAvatar, ListItemText, Divider, ListItem, List} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  span: {
      color: "#5e6472",
      fontWeight: '600'
  }
}));

export default function Scheduler({schedule, ward}) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
    <List className={classes.root}>
     
          {schedule.map(s =>
        
            (s.ward==ward)&&
            <React.Fragment
            key={s.id}
            >
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={s.family.identifier} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                  primary={s.family.head}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {s.household.address} Nkulumane 12
                  </Typography>
                      {" — Family " + s.family.identifier + "is scheduled to purchase mealie meal in the "}  {} <span className={classes.span}>{s.section} </span >{"at"} <span className={classes.span}>{s.place}</span>
                    </React.Fragment>
                
                  }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          </React.Fragment>


            
                 
     )}
       
         </List>
    </Container>
    </React.Fragment>
  );
}
