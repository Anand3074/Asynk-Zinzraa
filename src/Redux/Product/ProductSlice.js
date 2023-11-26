// productActionTypes.js
import { SET_SELECTED_PRODUCT } from './ProductConstants';

const initialState = {
  selectedProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
