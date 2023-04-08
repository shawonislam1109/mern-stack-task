import { PRODUCT_CART, REMOVE_CART } from "./actionType";


const initialState = {
    cart : [] , 
}

export const  productReducer = (state = initialState , action) => {
    const SelectedFood = state.cart.find(product => product._id === action.payload._id);
    
    switch(action.type){
     
        case PRODUCT_CART : 
        if(SelectedFood){
            const newFood = state.cart.filter(food => food._id !== SelectedFood._id)
            SelectedFood.quantity = SelectedFood.quantity + 1 
            return {
                ...state,
               cart : [...newFood, SelectedFood]
            };
        }
        return{
            ...state, 
            cart : [...state.cart , {...action.payload , quantity : 1 }]
        } 
        case REMOVE_CART :
            if(SelectedFood.quantity > 1){
                const newFood = state.cart.filter(food => food._id !== SelectedFood._id)
                SelectedFood.quantity = SelectedFood.quantity - 1 
                return {
                    ...state,
                   cart : [...newFood, SelectedFood]
                };
            }
            return {
                ...state , 
                cart :  state.cart.filter(product => product._id !== action.payload._id)
            }
        default : 
        return state ; 
    }
}