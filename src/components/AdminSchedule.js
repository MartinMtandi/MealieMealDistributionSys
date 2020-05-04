import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Select, TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, MenuItem, Button, Typography } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';
import { newSchedule } from '../actions/scheduleActions'

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

  const dispatch = useDispatch();

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

  const handleSubmit = () => {
    const schedule = {
      units: values.units,
      ward: values.ward,
      place: values.place,
      date:"2020-05-05"//values.date""
     }

    dispatch(newSchedule(schedule))

  }
  return (
    <div>
      <form>
      <Typography className={classes.header} variant="h6" gutterBottom>
        Schedule Distribution
      </Typography>
      <TextField fullWidth value={values.units} onChange={handleChange('units')} className={clsx(classes.margin, classes.textField)} id="units" label="Number of Units" variant="outlined" />
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
          <MenuItem value={21}>Ward 21</MenuItem>
          <MenuItem value={22}>Ward 22</MenuItem>
          <MenuItem value={23}>Ward 23</MenuItem>
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
          <MenuItem value="coolland">Coolland Supermarket</MenuItem>
          <MenuItem value="manemo">Manemo Suprette</MenuItem>
          <MenuItem value="White house">White House</MenuItem>
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
        label="Distribution Date" 
        variant="outlined" />
        <Button
          className={classes.margin}
          variant="contained"
          color="primary"
          disableElevation
          onClick={handleSubmit}
        >
        Submit
      </Button>
      </form>
    </div>
  );
}
