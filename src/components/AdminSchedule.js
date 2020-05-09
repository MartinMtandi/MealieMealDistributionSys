import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Select, TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, MenuItem, Button, Typography } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';
import { newSchedule } from '../actions/scheduleActions'
import Alert from '@material-ui/lab/Alert'
import { clearErrors } from '../actions/errorActions'

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


  useEffect(() => {
   
    const timer = setTimeout(() => {
     dispatch(clearErrors())
     
   }, 10000);
   return () => clearTimeout(timer);
     
   }
   , [])

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
      date: values.date
     }
    dispatch(newSchedule(schedule))

    setValues({ ...values, 
      units: '',
      weight: '',
      ward: '',
      place: '',
      date: '',
});
  }

  const errors = useSelector(state => state.error.errors)
  const success = useSelector(state => state.error.success)


  return (
    <div>
      <form>
        <Typography className={classes.header} variant="h6" gutterBottom>
          Schedule Distribution
        </Typography>

     
        {errors && <Alert severity="error">{errors.message}</Alert>} 
        {success && <Alert severity="success">Schedule created</Alert>}
        <TextField 
          fullWidth 
          value={values.units} 
          onChange={handleChange('units')} 
          className={clsx(classes.margin, classes.textField)} 
          id="units" 
          type="number"
          label="Number of Units" 
          variant="outlined" 
        />
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
          <MenuItem value={22}>Ward 22</MenuItem>
          <MenuItem value={24}>Ward 24</MenuItem>
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
          <MenuItem value="white house">White House</MenuItem>
        </Select>
      </FormControl>
      <TextField 
        fullWidth 
        type="date" 
        InputLabelProps={{
            shrink: true,
          }} 
        value={values.date} 
        onChange={handleChange('date')}
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
