import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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

export default function Scheduler() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="A" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Susan Ndlovu"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                16124 Nkulumane 10
              </Typography>
              {" — Family A is scheduled to purchase mealie meal in the "} <span className={classes.span}>{"morning"} </span >{"at"} <span className={classes.span}>{"Coolland"}</span>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="C" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Bongani Dliwayo"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                8515 Nkulumane 12
              </Typography>
              {" — Family C is scheduled to purchase mealie meal in the "} <span className={classes.span}>{"afternoon"} </span >{"at"} <span className={classes.span}>{"Mqamulazwe"}</span>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="B" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Chengeto Moyo"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                11320 Nkulumane 11
              </Typography>
              {" — Family B is scheduled to purchase mealie meal in the "} <span className={classes.span}>{"morning"} </span >{"at"} <span className={classes.span}>{"White house"}</span>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
