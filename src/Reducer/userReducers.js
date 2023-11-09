import {
    LOGIN_REQUEST,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
     GOOGLE_REQUEST,
    GOOGLE_SUCCESS,
    GOOGLE_FAIL
}
from "../Constants/UserConstants"


export const userReducer = (state = { users: {},userProfile:{} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case GOOGLE_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,

      };
    case LOAD_USER_REQUEST:
             return {
                ...state,
        loading: true,
        isAuthenticated: true,

      };
    case LOAD_USER_SUCCESS:
     
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userProfile: action.payload,
       
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case GOOGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
       
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,

      };
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
    case GOOGLE_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null, 
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        userProfile: null, 
        error: action.payload,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user:null
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};