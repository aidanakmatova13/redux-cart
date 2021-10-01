const initialState = {
    catalog: [],
    cart: []
}

 export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATALOG' :
            return {...state, catalog: action.payload}
        case 'ADD_TO_CART' :
            const obj = state.cart.find(item => item.id === action.payload.id)
            if (obj) {
                return {
                    ...state,
                    cart: state.cart.map(el => el.id === obj.id ?
                        {...obj, quantity: obj.quantity + 1} :
                        el
                    )
                }
            }
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]} //action.payload - обьект который хотим добавиь
        case 'REMOVE_FROM_CART':
            return {...state, cart: state.cart.filter(el => el.id !== action.payload)}
        case 'DECREASE_TO_ONE':
            const object = state.cart.find(item => item.id === action.payload.id)
            if (object.quantity > 1) {
                return {
                    ...state,
                    cart: state.cart.map(el => el.id === object.id ?
                        {...object, quantity: object.quantity - 1} :
                        el
                    )
                }
            }
            return state
        default :
            return state;
    }
}