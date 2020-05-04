import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    textAlign: 'center'
  },
}));


export default function ManageHouseholds() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Manage Households
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="16436 Nkulumane, Ward 20- Coolland"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <Link to="/family/9">
                        <IconButton edge="end" aria-label="view more">
                        <PageviewIcon />
                        </IconButton>
                    </Link>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
            <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="8831 Nkulumane, Ward 21- Manemo"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <Link to="/family/10">
                    <IconButton edge="end" aria-label="view more">
                      <PageviewIcon />
                    </IconButton>
                    </Link>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
