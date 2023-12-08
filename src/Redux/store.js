import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import cartReducer from './CartSlice.js';
import wishlistReducer from './Wishlist/WIshSlice.js';
import productSlice from './Product/ProductSlice.js'
import filtersReducer from './Product/filter.js'
import { userReducer,userProfileReducer } from "./User/userReducer";
// import { modalsDescriptionReducer, modalsReducer } from "./AdminP/mobileReducer";
// import {orderReducer} from './Orders/orderReducers.js'

const rootReducer = combineReducers({
  users :userReducer,
  userProfile:userProfileReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  product: productSlice,
  filters: filtersReducer,
  // modals:modalsReducer,
  // modalDescription:modalsDescriptionReducer,
  // order: orderReducer
});

const persistConfig = {
  key: 'Zinzraa',
  storage,
  // You can add more options here, such as blacklist or whitelist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
persistor.subscribe(() => {
  console.log('State persisted:', store.getState());
});

export { store, persistor };



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

// // store.js
// import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
// import cartReducer from './CartSlice.js';
// import wishlistReducer from './Wishlist/WIshSlice.js';
// import productSlice from './Product/ProductSlice.js'

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     wishlist: wishlistReducer,
//     product: productSlice 
//   },
// });

// export default store;
// store.js
