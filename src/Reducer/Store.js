import { createStore } from "redux";
import { productReducer } from "./ProductReducer/FoodReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(productReducer, composeWithDevTools())

export default store ; 