import axios from 'axios'
import { FETCH_HOUSEHOLD, NEW_HOUSEHOLD } from "./types";


export function fetchHouseholds() {
    
    console.log("schedule");
    return async function (dispatch) {
        
        await axios.get("http://maize.ubhejanelabs.com/api/households")
            .then(household => dispatch({
                type: FETCH_HOUSEHOLD,
                payload:household.data
            })

        )
        .catch(function (error) {
            // handle error
            console.log(error);
        })
            }

}

export function newHousehold($household) {
    
    console.log("schedule");
    return async function (dispatch) {
 
        
     await   axios.post('http://maize.ubhejanelabs.com/api/household"', $household)
        .then(household => dispatch({
            type: NEW_HOUSEHOLD,
            payload:household.data
        })
        )
        .catch(function (error) {
            console.log(error);
          });

            }

}