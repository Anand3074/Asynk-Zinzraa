// src/actions/productActions.js

import { fireDB } from '../firebase/firebase.jsx';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProducts = () => async (dispatch) => {
  try {
    const snapshot = await fireDB.database().ref('products').once('value');
    const products = snapshot.val();
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
