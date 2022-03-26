import {ADD_TO_CART,REMOVE_TO_CART} from "../constants";
export const addToCart= (data) => {
    console.warn("action add", data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeToCart= () => {
    console.warn("action remove")
    return {
        type: REMOVE_TO_CART,
        
    }
}