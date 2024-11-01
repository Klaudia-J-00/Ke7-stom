import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./Reducers/UserReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
} from "./Reducers/OrderReducers";
import { customCartReducer } from "./Reducers/CustomCartReducers";
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  customCart: customCartReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const customCartItemsFromLocalStorage = localStorage.getItem("customCartItems")
  ? JSON.parse(localStorage.getItem("customCartItems"))
  : [];

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//shipping address
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    customCartItems: customCartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};

const middleware = [thunk];

const store = configureStore({
  reducer: reducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

export default store;

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
