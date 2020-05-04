import axios from 'axios'
import { FETCH_SALE, NEW_SALE} from "./types";


export function fetchSales() {
    
    console.log("schedule");
    return async function (dispatch) {
        
        await axios.get("http://maize.ubhejanelabs.com/api/sales")
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

export function newSale($sale) {
    
    console.log("schedule");
    return async function (dispatch) {
 
        
     await   axios.post('http://maize.ubhejanelabs.com/api/household"', $sale)
        .then(sale => dispatch({
            type: NEW_SALE,
            payload:sale.data
        })
        )
        .catch(function (error) {
            console.log(error);
          });

            }

}