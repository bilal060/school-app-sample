import AUTH from '../constants/Auth.constant';

const initialState = {
  isLoggedIn: false,
  user: {},
  register:{}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH.LOGIN_USER_API:
      return {
        ...state,
        loginLoading: action.loading,
        isLoggedIn: action.isLoggedIn,
        user: action.user,
      };
    case AUTH.REGISTER_USER_API:
      return {
        ...state,
       regiterLoading:action.loading,

       register : action.data,
      };
      case AUTH.OTPVERIFY_USER_API:
      return {
        ...state,
       otpVerifyLoading:action.loading,
       
      };

    default:
      return state;
  }
};
