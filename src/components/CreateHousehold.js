import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Select, TextField, InputLabel, FormControl, MenuItem, Button, Typography } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';


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

  const classes = useStyles();
  const [values, setValues] = React.useState({
    address: '',
    ward: '',
    place: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    const household = {
      address: values.address,
      ward: values.ward,
      place: values.place
     }
  
     console.log(household)

  }
  return (
    <div>
      <form>
        <Typography className={classes.header} variant="h6" gutterBottom>
         Create New Household
        </Typography>
        <TextField 
          fullWidth 
          value={values.units} 
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
