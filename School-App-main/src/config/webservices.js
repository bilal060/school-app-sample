export const BASE_URL = "https://apisd.virtual-node.com/";


export const LOGIN = `${BASE_URL}studentLogin`;
export const REGISTER = `${BASE_URL}studentSignUp`;
export const OTPVERIFY = `${BASE_URL}otpverify`;


export const UPLOAD_IMAGE = (userId) =>  `${BASE_URL}/students/${userId}/image`;

export const GET_STATE = (country) =>  `${BASE_URL}country?country=${country}`;
export const GET_CITY = (state) =>  `${BASE_URL}country?state=${state}`;