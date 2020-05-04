import axios from 'axios'
import { FETCH_FAMILY, NEW_FAMILY } from "./types";


export function fetchFamilies() {
    
    console.log("schedule");
    return async function (dispatch) {
        
        await axios.get("http://maize.ubhejanelabs.com/api/families")
            .then(family => dispatch({
                type: FETCH_FAMILY,
                payload:family.data
            })

        )
        .catch(function (error) {
            // handle error
            console.log(error);
        })
            }

}

export function newFamily($family) {
    
    console.log("schedule");
    return async function (dispatch) {
 
        
     await   axios.post('http://maize.ubhejanelabs.com/api/family"', $family)
        .then(family => dispatch({
            type: NEW_FAMILY,
            payload:family.data
        })
        )
        .catch(function (error) {
            console.log(error);
          });

            }

}