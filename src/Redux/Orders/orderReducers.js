import { ORDER_REQUEST,ORDER_FAIL,ORDER_SUCCESS } from "./orderConstants";
import { CLEAR_ERRORS } from "../User/userConstants";

export const orderReducer = (state = {order:{} }, action) => {
   switch (action.type) {
    case ORDER_REQUEST:
      return {
        loading: true,
        orderCompleted: false,
      };
    case ORDER_SUCCESS:
      return {
        ...state,
       loading: false,
        orderCompleted: true,
        order: action.payload,
      };
    
    case ORDER_FAIL:
      return {
        ...state,
       loading: true,
        orderCompleted: false,
        order: null,
        error: action.payload,
      };
   
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}
