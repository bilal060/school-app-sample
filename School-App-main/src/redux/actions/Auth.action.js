import AUTH from '../constants/Auth.constant';
import GLOB from '../constants/Global.constant';

import {handleError, handleSuccess, post, get} from '../../utils/methods';
import {TOKEN} from '../../utils/asyncStorage/Constants';
import {useNavigation} from '@react-navigation/native';

import {
  _setDataToAsyncStorage,
  getTokenAndSetIntoHeaders,
  getValueIntoLocalStorage,
  removeUserDetail,
} from '../../utils/asyncStorage/Functions';
import {
  BASE_URL,
  GET_CITY,
  GET_STATE,
  LOGIN,
  OTPVERIFY,
  REGISTER,
  UPLOAD_IMAGE,
} from '../../config/webservices';
import axios from 'axios';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

export const login = (payload, CB) => async (dispatch) => {
  console.log("🚀 ~ file: Auth.action.js:26 ~ login ~ payload:", payload)
  dispatch({type: AUTH.LOGIN_USER_API, loading: true});

  try {
    let response = await post(LOGIN, payload);
    console.log(
      '🚀 ~ file: Auth.action.js:19 ~ login ~ response:',
      response?.data?.userFetch?.token,
    );

    if (response?.data?.error) {
      dispatch({type: AUTH.LOGIN_USER_API, loading: false});
      handleError(response?.data?.data?.message || '');
    } else {
      await _setDataToAsyncStorage(TOKEN, response?.data?.userFetch?.token);
      await getTokenAndSetIntoHeaders(response?.data?.userFetch?.token);
      dispatch({
        type: AUTH.LOGIN_USER_API,
        loading: false,
        user: response?.data,
        isLoggedIn: false,
      });
    }
    CB && CB(response?.data)
  } catch (error) {
    console.log('🚀 ~ file: Auth.action.js:45 ~ login ~ error:', error);

    handleError(error?.data?.error, {autoHide: false});
    dispatch({type: AUTH.LOGIN_USER_API, loading: false});
  }
};

export const getStates = (payload, CB) => async (dispatch) => {
  dispatch({type: GLOB.GET_STATES, loading: true});

  try {
    let response = await get(GET_STATE(payload));
    console.log(
      '🚀 ~ file: Auth.action.js:51 ~ getStates ~ response:',
      response,
    );

    if (response?.data?.error) {
      dispatch({type: GLOB.GET_STATES, loading: false});
      handleError(response?.data?.data?.message || '');
    } else {
      dispatch({
        type: GLOB.GET_STATES,
        data: response?.data?.statesList,
        loading: false
      });
    }
  } catch (error) {
    console.log('🚀 ~ file: Auth.action.js:45 ~ login ~ error:', error);

    handleError(error?.data?.error, {autoHide: false});
    dispatch({type: GLOB.GET_STATES, loading: false});
  }
};
export const getCities = (payload, CB) => async (dispatch) => {
  dispatch({type: GLOB.GET_CITIES, loading: true});

  try {
    let response = await get(GET_CITY(payload));
    console.log(
      '🚀 ~ file: Auth.action.js:74 ~ getCities ~ response:',
      response,
    );

    if (response?.data?.error) {
      dispatch({type: GLOB.GET_CITIES, loading: false});
      handleError(response?.data?.data?.message || '');
    } else {
      dispatch({
        type: GLOB.GET_CITIES,
        data: response?.data?.citiesList,
        loading: false
      });
    }
  } catch (error) {
    console.log('🚀 ~ file: Auth.action.js:45 ~ login ~ error:', error);

    handleError(error?.data?.error, {autoHide: false});
    dispatch({type: GLOB.GET_CITIES, loading: false});
  }
};

export const student_Register = (payload, CB) => async (dispatch) => {
  console.log("🚀 ~ file: Auth.action.js:114 ~ conststudent_Register= ~ payload:", payload)
  dispatch({type: AUTH.REGISTER_USER_API, loading: true});

  try {
    let response = await post(REGISTER, payload);
    console.log(
      '🚀 ~ file: Auth.action.js:99 ~ conststudent_Register= ~ response:',
      response,
    );

    if (response?.data?.error) {
      dispatch({type: AUTH.REGISTER_USER_API, loading: false});
      handleError(response?.data?.data?.message || '');
    } else {
      dispatch({
        type: AUTH.REGISTER_USER_API,
        data: response?.data?.Student_user,
        loading: false
      });
    }
    CB && CB(response?.data?.Student_user);
  } catch (error) {
    console.log("🚀 ~ file: Auth.action.js:135 ~ conststudent_Register= ~ error:", error)

    handleError(error?.data?.message, {autoHide: false});
    dispatch({type: AUTH.REGISTER_USER_API, loading: false});
  }
};

export const otp_Verify = (payload, CB) => async (dispatch) => {
  dispatch({type: AUTH.OTPVERIFY_USER_API, loading: true});

  console.log(
    '🚀 ~ file: Auth.action.js:122 ~ constotp_Verify= ~ payload:',
    payload,
  );

  try {
    let response = await post(OTPVERIFY, payload);
    console.log(
      '🚀 ~ file: Auth.action.js:125 ~ constotp_Verify= ~ response:',
      response,
    );

    if (response?.data?.error) {
      dispatch({type: AUTH.OTPVERIFY_USER_API, loading: false});
      handleError(response?.data?.data?.message || '');
    } else {
      dispatch({
        type: AUTH.OTPVERIFY_USER_API,
        data: response?.data?.Student_user,
      });
    }
    CB && CB(response?.data);
  } catch (error) {
    console.log('🚀 ~ file: Auth.action.js:45 ~ login ~ error:', error);

    handleError(error?.data?.error, {autoHide: false});
    dispatch({type: AUTH.OTPVERIFY_USER_API, loading: false});
  }
};

export const uploadImage = (id, payload, CB) => async (dispatch) => {
  console.log('objectobject', payload , CB , id);
  var formdata = new FormData();
  // formdata.append('image', {
  //   uri: payload,
  //   type: 'image/jpeg', // Set a default value for the image type
  //   name: 'image.jpg',
  // });

  var requestOptions = {
    method: 'POST',
    body: payload,
    redirect: 'follow',
  };

  fetch(`${BASE_URL}students/${id}/image`, requestOptions)
    .then((response) => response.text())
    .then((result) => CB && CB(result))
    .catch((error) => console.log('errorerrorerrorerrorerror', error));

  // try {
  //   let response = await post(UPLOAD_IMAGE(id) ,payload);
  //   console.log("🚀 ~ file: Auth.action.js:153 ~ uploadImage ~ response:", response)

  //   if (response?.data?.error) {
  //     dispatch({type:AUTH.UPLOAD_IMAGE_USER_API, loading: false});
  //     handleError(response?.data?.data?.message || '');
  //   } else {

  //     dispatch({
  //       type: AUTH.UPLOAD_IMAGE_USER_API,
  //       data: response?.data,
  //     });
  //   }
  //   CB && CB(response?.data)
  // } catch (error) {
  //   console.log("🚀 ~ file: Auth.action.js:45 ~ login ~ error:", error)

  //   handleError(error?.data?.error, {autoHide: false});
  //   dispatch({type: AUTH.UPLOAD_IMAGE_USER_API, loading: false});
  // }
};

export const logout = (payload, CB) => async (dispatch) => {
  console.log('🚀 ~ file: Auth.action.js ~ line 17 ~ login ~ payload', payload);

  // dispatch({ type: AUTH.LOGIN_USER_API, loading: false,});

  dispatch({type: AUTH.LOGIN_USER_API, loading: true, isLoggedIn: false});

  try {
    // let response = await post(LOGIN, payload);
    // if (response?.data?.error) {
    //     dispatch({ type: AUTH.LOGIN_USER_API, loading: false });
    //     handleError(response?.data?.data?.message || "");
    // } else {
    //     await _setDataToAsyncStorage(TOKEN, response?.data?.data?.token);
    //     await getTokenAndSetIntoHeaders(response?.data?.data?.token);
    //     dispatch({
    //         type: AUTH.LOGIN_USER_API,
    //         loading: false,
    //         user: response?.data,
    //         isLoggedIn: true,
    //     });
    // }
  } catch (error) {
    console.log('🚀 ~ file: Auth.action.js ~ line 42 ~ login ~ error', error);
    handleError(error?.data?.error, {autoHide: false});
    dispatch({type: AUTH.LOGIN_USER_API, loading: false});
  }
};
