import axios from 'axios'
import { FETCH_SCHEDULE, NEW_SCHEDULE } from "./types";


export function fetchSchedule() {
    
    console.log("schedule");
    return async function (dispatch) {
        
        await axios.get("http://portalapi.test/api/schedule")
            .then(schedule => dispatch({
                type: FETCH_SCHEDULE,
                payload:schedule.data
            })

        )
        .catch(function (error) {
            // handle error
            console.log(error);
        })
            }

}