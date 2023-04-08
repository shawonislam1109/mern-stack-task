import { PRODUCT_CART, REMOVE_CART } from "./actionType";


const initialState = {
    cart : [] , 
}

export const  productReducer = (state = initialState , action) => {
    const FoodCart = state.cart.find(product => product.idCategory === action.payload.idCategory) ;
    switch(action.type){
        case PRODUCT_CART : 
        return{
            ...state, 
            cart : [...state.cart , action.payload]
        } 
        case REMOVE_CART :
            return {
                ...state , 
                cart :  state.cart.filter(product => product.idCategory === action.payload.idCategory)
            }
        default : 
        return state ; 
    }
}