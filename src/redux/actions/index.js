import axios from "axios";

export const getCatalog = () => {
    return (dispatch) => {
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/catalog')
            .then(({data}) => {
                return dispatch({type: 'GET_CATALOG', payload: data})
            })
    }
}
export const addCatalog = (el) => {
    return {type: 'ADD_TO_CART', payload: el}
}
export const delCatalog = (el) => {
    return {type: 'DECREASE_TO_ONE', payload: el}
}