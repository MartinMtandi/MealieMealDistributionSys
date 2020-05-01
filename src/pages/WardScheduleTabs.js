import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core'

import CustomAppBar from '../components/AppBar'
import Scheduler from '../components/Scheduler'

import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchSchedule } from '../actions/scheduleActions'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  appBar: {
      backgroundColor: '#9D43FF',
      color: '#fff',
      fontWeight: 700
  }
}));

export default function WardSchedulerTabs() {




  const dispatch = useDispatch();

  useEffect(() => {

    // this.props.fetchPosts();    
    dispatch(fetchSchedule());
    
    
 }
 , [])

  const schedule = useSelector(state => state.schedule.items)
  console.log(schedule)

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
    <CustomAppBar />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Ward 21" {...a11yProps(0)} />
          <Tab label="Ward 22" {...a11yProps(1)} />
          <Tab label="Ward 23" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Scheduler
            schedule={schedule}
            ward={21}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Scheduler
          schedule={schedule}
          ward={22}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Scheduler
          schedule={schedule}
          ward={23}
          />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
