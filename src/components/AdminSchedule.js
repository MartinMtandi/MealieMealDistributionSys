import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Select, TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, MenuItem, Button, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  header: {
    textAlign: 'center'
  }
}));

export default function AdminSchedule() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    units: '',
    weight: '',
    ward: '',
    place: '',
    date: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <form>
      <Typography className={classes.header} variant="h6" gutterBottom>
        Schedule New Delivery
      </Typography>
      <TextField fullWidth value={values.units} className={clsx(classes.margin, classes.textField)} id="units" label="Number of Units" variant="outlined" />
        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="kgs">Total Weight (Kgs)</InputLabel>
          <OutlinedInput
            id="kgs"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="kgs"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={140}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" className={clsx(classes.margin, classes.textField)}>
        <InputLabel id="select-ward">Ward</InputLabel>
        <Select
          labelId="select-ward"
          id="select-ward"
          value={values.ward}
          onChange={handleChange('ward')}
          label="Ward"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={20}>Ward 20</MenuItem>
          <MenuItem value={21}>Ward 21</MenuItem>
          <MenuItem value={22}>Ward 22</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth variant="outlined" className={clsx(classes.margin, classes.textField)}>
        <InputLabel id="select-place">Place</InputLabel>
        <Select
          labelId="select-place"
          id="select-place"
          value={values.place}
          onChange={handleChange('place')}
          label="Place"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Coolland Supermarket">Coolland Supermarket</MenuItem>
          <MenuItem value="Mqamulazwe Suprette">Mqamulazwe Suprette</MenuItem>
          <MenuItem value="White House">White House</MenuItem>
        </Select>
      </FormControl>
      <TextField 
        fullWidth 
        type="date" 
        InputLabelProps={{
            shrink: true,
          }} 
        value={values.date} 
        className={clsx(classes.margin, classes.textField)} 
        id="date" 
        label="Delivery Date" 
        variant="outlined" />
      <Button className={classes.margin} variant="contained" color="primary" disableElevation>
        Submit
      </Button>
      </form>
    </div>
  );
}
