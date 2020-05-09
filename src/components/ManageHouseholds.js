import React, {useState,useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Button, Divider, ListItemText, Typography, TextField, Paper} from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { fetchHouseholds } from '../actions/householdActions';
import { connect, useSelector, useDispatch } from 'react-redux';
import FamilyView from './FamilyView'
import AddFamilyForm from './AddFamilyForm';
import AddIcon from '@material-ui/icons/Add';
import NewHousehold from '../components/CreateHousehold'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    textTransform: 'uppercase'
  },
  inlinePadding: {
    display: 'inline',
    marginLeft: '3ch'
  },
  margin: {
    margin: theme.spacing(1),
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 3, 1, 1)
  }
}));

export default function HouseholdsList() {


  const dispatch = useDispatch();

  useEffect(() => {

    // this.props.fetchPosts();    
    dispatch(fetchHouseholds());
    
    
 }
 , [])

 const households = useSelector(state => state.household.items)

  const classes = useStyles();

  const [count, setCount] = useState(0);
  const [family, setFamily] = useState('');
  

  const [values, setValues] = React.useState({
    name: '',
    phone: '',
    members: '',
  });


  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values)
  }

  return (
    <React.Fragment>
     
   
   <NewHousehold/>
      <List className={classes.root}>

      {households.map(household =>
        
        <ListItem
        key={household.id}
          alignItems="flex-start">
          <ListItemText
            primary={household.address + " Nkulumane,  Ward " + household.ward + ", " + household.place+ ", "+ household.number_of_families+" families"} //"16125 Nkulumane 12, Ward 20- Coolland"
            secondary={    <React.Fragment>{(family == household.address) &&
              <React.Fragment>
              { household.families.map(family=>
                <FamilyView
                  key={family.id}
                  identifier={family.identifier}
                  head={family.head}
                  phone={family.contact}
                  members={family.number_of_people}
                
                
                />
              )}
                </React.Fragment>
            }
              {(count === household.id) && <AddFamilyForm household={household.id}/>}
            { (family === household.address) ? <Button size="small" variant="outlined" startIcon={<VisibilityOffIcon />} className={classes.margin} onClick={() => setFamily('')}>Hide Families</Button> : <Button size="small" variant="outlined" startIcon={<VisibilityIcon />} className={classes.margin} onClick={() => setFamily(household.address)}>View Families</Button>}
            {(count ===0) ? <Button size="small" variant="outlined" startIcon={<GroupAddIcon />} className={classes.margin} onClick={() => setCount(household.id)}>Add Family</Button> : <Button size="small" variant="outlined" startIcon={<GroupAddIcon />} className={classes.margin} onClick={() => setCount(0)}>Cancel</Button>}
            </React.Fragment>}
            />
         </ListItem>
          
            

        
        
        )}
      </List>
      </React.Fragment>
  );
}
