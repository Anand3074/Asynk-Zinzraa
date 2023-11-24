// WishlistReducer.js
import {
    ADD_TO_WISHLIST,
    REMOVE_WISHLIST_ITEM,
    CLEAR_WISHLIST,
  } from "./WishConstants";
  
  const initialState = {
    wishlistItems: [],
  };
  
  const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
  case ADD_TO_WISHLIST:
  const newItem = action.payload;
  const itemExistsIndex = state.wishlistItems.findIndex(item => item.id === newItem.id);

  if (itemExistsIndex !== -1) {
    const updatedWishlistItems = [...state.wishlistItems];
    updatedWishlistItems[itemExistsIndex] = newItem;

    return {
      ...state,
      wishlistItems: updatedWishlistItems,
    };
  } else {
    return {
      ...state,
      wishlistItems: [...state.wishlistItems, newItem],
    };
  }

      case REMOVE_WISHLIST_ITEM:
        return {
          ...state,
          wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload
          ),
        };
  
      case CLEAR_WISHLIST:
        return {
          ...state,
          wishlistItems: [], // Clears the entire wishlist
        };
  
      default:
        return state;
    }
  };
  
  export default wishlistReducer;