import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";
import { PRODUCT_ENDPOINT } from "../constants/apiEndpoints";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(PRODUCT_ENDPOINT+id)

    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            count_in_stock:data.count_in_stock,
            qty:qty
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems) )
}
