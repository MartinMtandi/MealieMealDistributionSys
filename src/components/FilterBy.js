import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Select, FormControl, MenuItem, InputLabel} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '98%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FilterBy() {
  const classes = useStyles();
  const [value, setValue] = React.useState('all');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="Search">Search</InputLabel>
          <Select
            labelId="filter"
            id="Search"
            value={value}
            onChange={handleChange}
            label="Search"
          >
            <MenuItem value="all">
              <em>All</em>
            </MenuItem>
            <MenuItem value={20}>Ward 20</MenuItem>
            <MenuItem value={21}>Ward 21</MenuItem>
            <MenuItem value={22}>Ward 22</MenuItem>
          </Select>
        </FormControl>
    </div>
  );
}
