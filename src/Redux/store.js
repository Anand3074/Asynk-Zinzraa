// store.js
import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.js';
// import wishlistReducer from './wishlistSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // wishlist: wishlistReducer,
  },
});

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";

// export const store = configureStore({
//     reducer :{
//         cart : cartSlice
//     },
//     devTools : true
// })


// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; // Importing middleware (e.g., redux-thunk)
// import { userReducers } from './Reducer/userReducers';
// import { cartReducers } from './Reducer/cartReducers';
// import { orderReducers } from './Reducer/orderReducers';
// import { productReducers } from './Reducer/productReducers';
// import { wishlistReducers } from './Reducer/wishlistReducers';

// const rootReducer = combineReducers({
//   products: productReducers,
//   users: userReducers,
//   cart: cartReducers,
//   orders: orderReducers,
//   wishlist: wishlistReducers,
// });

// const middleware = [thunk]; // Place your middleware (e.g., redux-thunk) in the array

// const store = createStore(rootReducer, applyMiddleware(...middleware));

// export default store;
