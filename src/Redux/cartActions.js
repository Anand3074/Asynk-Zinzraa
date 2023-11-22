import {
    ADD_TO_CART,
    REMOVE_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "./CartConstants";
  
  
  export const addItemsToCart = (item) => async (dispatch, getState) => {
    const { title, price, imageUrl, category, description, id } = item;
  
    dispatch({

      type: ADD_TO_CART,
      payload: {
      id,
      title,
      price,
      imageUrl,
      category,
      description
      }
      ,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    // const { title, price, imageUrl, category, description, id } = item;
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  }

  export const removeCart = () => async (dispatch,getState)=>{
    dispatch({
      type:REMOVE_CART
    })
  }