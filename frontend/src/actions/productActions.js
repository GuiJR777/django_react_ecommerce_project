import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'
import { PRODUCT_ENDPOINT } from '../constants/apiEndpoints'
import axios from 'axios'


export const listProducts = () => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get(PRODUCT_ENDPOINT)

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

    }catch(error){

        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response
        })
    }
}
