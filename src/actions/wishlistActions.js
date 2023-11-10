import {
    ADD_TO_WISHLIST,
    REMOVE_WISHLIST_ITEM,
    REMOVE_WISHLIST,
  } from "../Constants/WishlistConstants";
  
  export const addToWishlist = (product, id) => async (dispatch) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: {
        productName: product.productName,
        price: product.price,
        productInfo: product,
        product: id,
        coverImage: product.coverImage,
        realPrice: product.realPrice,
        size:product.size,
        fabric:product.fabric
      },
    });
  
    // localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
  };
  
  export const removeItemFromWishlist = (id) => async (dispatch) => {
    dispatch({
      type: REMOVE_WISHLIST_ITEM,
      payload: id,
    });
  };
  
  export const removeWishlist = () => async (dispatch) => {
    dispatch({
      type: REMOVE_WISHLIST,
    });
  };
  