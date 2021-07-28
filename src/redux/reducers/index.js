import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productsReducer";
import CartReducer from "./CartReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    CartReducer
});

export default reducers;