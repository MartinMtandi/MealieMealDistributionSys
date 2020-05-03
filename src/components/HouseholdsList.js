import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '66ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    textTransform: 'uppercase'
  },
  inlinePadding: {
    display: 'inline',
    marginLeft: '3ch'
  }
}));

export default function HouseholdsList() {
  const classes = useStyles();

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
              {" — 2 Weeks Ago"}
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
              {" — 1 month Ago"}
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
              {" — 1 Year Ago"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
