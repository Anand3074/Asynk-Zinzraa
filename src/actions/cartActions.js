import {
    ADD_TO_CART,
    REMOVE_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../Constants/CartConstants";
  
  
  export const addItemsToCart = (product,id) => async (dispatch, getState) => {
   
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        productName:product.productName,
        price:product.price,
        productInfo:product,
        product:id,
        coverImage:product.coverImage,
       realPrice:product.realPrice
      },
    });
  
  //   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
   
  };
  
  export const removeCart = () => async (dispatch,getState)=>{
    dispatch({
      type:REMOVE_CART
    })
  }