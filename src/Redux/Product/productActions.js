import { SET_SELECTED_PRODUCT } from './ProductConstants';

export const setSelectedProduct = (productDetails) => {
  return {
    type: SET_SELECTED_PRODUCT,
    payload: productDetails,
  };
};
