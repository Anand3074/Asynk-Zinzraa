import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
    REMOVE_CART
  } from "./CartConstants";
  
  // cartReducer.js

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TO_CART:
          return {
              ...state,
              cartItems: [...state.cartItems, action.payload],
          };

      case REMOVE_CART_ITEM :
          return {
              ...state,
              cartItems: state.cartItems.filter(item => item.id !== action.payload),
          };

      default:
          return state;
  }
};

export default cartReducer;

// const cartReducer = (
//     state = { cartItems: [], shippingInfo: {} },
//     action
//   ) => {
//     switch (action.type) {
//       case ADD_TO_CART:
//         const item = action.payload;
  
//         const isItemExist = state.cartItems.find(
//           (i) => i.product === item.product
//         );
  
//         if (isItemExist) {
//           return {
//             ...state,
//             cartItems: state.cartItems.map((i) =>
//               i.product === isItemExist.product ? item : i
//             ),
//           };
//         } else {
//           return {
//             ...state,
//             cartItems: [...state.cartItems, item],
//           };
//         }
  
//       case REMOVE_CART_ITEM:
//         return {
//           ...state,
//           cartItems: state.cartItems.filter((i) => i.product !== action.payload),
//         };
//       case REMOVE_CART:
//           return{
//             ...state,
//             cartItems:[]
//           }
//       case SAVE_SHIPPING_INFO:
//         return {
//           ...state,
//           shippingInfo: action.payload,
//         };
  
//       default:
//         return state;
//     }
//   };

//   export default cartReducer
  
// import { createSlice } from '@reduxjs/toolkit'
// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             state.push(action.payload)
//         },
//         deleteFromCart(state, action) {
//             return state.filter(item => item.id != action.payload);
//         }
//     }
// })

// export const { addToCart, deleteFromCart } = cartSlice.actions

// export default cartSlice.reducer;