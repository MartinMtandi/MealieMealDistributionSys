import React, {useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Select, TextField, InputLabel, FormControl, MenuItem, Button, Typography } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';
import { newHousehold } from '../actions/householdActions';
import AddIcon from '@material-ui/icons/Add';
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

export default function CreateHousehold() {

  const dispatch = useDispatch();

  useEffect(() => {
   
    const timer = setTimeout(() => {
     dispatch(clearErrors())
     
   }, 10000);
   return () => clearTimeout(timer);
     
   }
   , [])

  const [householdForm, setHouseholdForm] = useState(false);

  const classes = useStyles();
  const [values, setValues] = React.useState({
    address: '',
    ward: '',
    place: '',
  });

  const handleHouseholdForm = () => {
    
    if (householdForm)
      setHouseholdForm(false)
    else
      setHouseholdForm(true)

  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    const household = {
      address: values.address,
      ward: values.ward,
      place: values.place
     }
  
    dispatch(newHousehold(household))
    console.log(household)
    setValues({ ...values, 
      address: '',
      ward: '',
      place: '',
});

  }

  const errors = useSelector(state => state.error.errors)
  const success = useSelector(state => state.error.success)

  return (
    <div>

<Button size="small" variant="outlined" startIcon={<AddIcon />} className={classes.margin} onClick={handleHouseholdForm}>Add Household </Button>

      {householdForm &&
        <form>
        {errors && <Alert severity="error">{errors.message}</Alert>} 
        {success && <Alert severity="success">Household added</Alert>}
          <Typography className={classes.header} variant="h6" gutterBottom>
            Create New Household
        </Typography>
          <TextField
            fullWidth
            value={values.address}
            onChange={handleChange('address')}
            className={clsx(classes.margin, classes.textField)}
            id="address"
            label="Address"
            variant="outlined"
          />
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
          <Button
            className={classes.margin}
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleSubmit}
          >
          Submit
      </Button>
        
      <Button
            className={classes.margin}
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleHouseholdForm}
          >
            Cancel
      </Button>
        </form>
      }
    </div>
  );
}
