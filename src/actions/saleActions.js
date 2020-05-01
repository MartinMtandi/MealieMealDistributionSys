import axios from 'axios'
import { FETCH_SALE, NEW_SALE} from "./types";


export function fetchSales() {
    
    console.log("schedule");
    return async function (dispatch) {
        
        await axios.get("http://portalapi.test/api/sales")
            .then(sales=> dispatch({
                type: FETCH_SALE,
                payload:sales.data
            })

        )
        .catch(function (error) {
            // handle error
            console.log(error);
        })
            }

}