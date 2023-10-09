import React from "react";
import axios from "axios";
import { Platform, I18nManager } from "react-native";
import Toast from "react-native-toast-message";
import Snackbar from 'react-native-snackbar';

export const get = (url) => {
    return axios.get(url);
};

export const post = (url, data, config) => {
    return axios.post(url, data, config);
};
export const put = (url, data) => {
    return axios.put(url, data);
};

export const encodeQueryData = (data) => {
    const ret = [];
    for (const d in data) {
        ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    }
    return ret.join("&");
};

export const handleCommon = (
    type,
    title = "",
    description = "",
    otherOptions
) => {
    Snackbar.show({
        text: title,
        textColor:"red",
        duration: Snackbar.LENGTH_SHORT,
    });
};

export const handleError = (description = "", otherOptions) => {
    console.log("🚀 ~ file: methods.js:40 ~ handleError ~ description:", description)
    Snackbar.show({
        text: description || "Some Thing Went Wrong",
        textColor:"red",
        duration: Snackbar.LENGTH_LONG,
    });
};

export const handleSuccess = (
    message ,
    defaultDescription = "",
    otherOptions
) => {
    Snackbar.show({
        text: message,
        textColor:"green",
        duration: Snackbar.LENGTH_SHORT,
    });
};

export const MappedElement = ({ data, renderElement, empty }) => {
    if (data && data.length) {
        return data.map((obj, index, array) =>
            renderElement(obj, index, array)
        );
    }
    return empty ? empty() : null;
};

