// WishlistActions.js

import {
    ADD_TO_WISHLIST,
    REMOVE_WISHLIST_ITEM,
    CLEAR_WISHLIST,
  } from "./WishConstants";
  // 
  export const addToWishlist = (item) => async (dispatch, getState) => {
    const { title, price, imageUrl, category, description, id } = item;
  
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: {
        id,
        title,
        price,
        imageUrl,
        category,
        description,
      },
    });
  
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(getState().wishlist.wishlistItems)
    );
  };
  
  export const removeItemFromWishlist = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_WISHLIST_ITEM,
      payload: id,
    });
  
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(getState().wishlist.wishlistItems)
    );
  };
  
  export const clearWishlist = () => async (dispatch, getState) => {
    dispatch({
      type: CLEAR_WISHLIST,
    });
  
    localStorage.removeItem("wishlistItems");
  };
  