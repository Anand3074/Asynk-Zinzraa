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
  const newItem = action.payload;
  const itemExistsIndex = state.cartItems.findIndex(item => item.id === newItem.id);

  if (itemExistsIndex !== -1) {
    const updatedCartItems = [...state.cartItems];
    updatedCartItems[itemExistsIndex] = newItem;

    return {
      ...state,
      cartItems: updatedCartItems,
    };
  } else {
    return {
      ...state,
      cartItems: [...state.cartItems, newItem],
    };
  }
      case REMOVE_CART_ITEM :
          return {
              ...state,
              cartItems: state.cartItems.filter(item => item.id !== action.payload),
          };

      case REMOVE_CART:
          return {
              ...state,
              cartItems: [], // Clears the entire cart
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

// case ADD_TO_CART:
      //     const newItem = action.payload;
      //     const itemExists = state.cartItems.some(item => item.id === newItem.id);
        
      //     if (itemExists) {
      //       return state;
      //     }
        
      //     return {
      //       ...state,
      //       cartItems: [...state.cartItems, newItem],
      //     };

      //     case ADD_TO_CART:
      // const item = action.payload;

      // const isItemExist = state.cartItems.find(
      //   (i) => i.product === item.product
      // );

      // if (isItemExist) {
      //   return {
      //     ...state,
      //     cartItems: state.cartItems.map((i) =>
      //       i.product === isItemExist.product ? item : i
      //     ),
      //   };
      // } else {
      //   return {
      //     ...state,
      //     cartItems: [...state.cartItems, item],
      //   };
      // }
