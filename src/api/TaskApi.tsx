import axios from "axios";
import React from "react";
import Constant from "../Constant";
import { AuthContext } from "../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TaskApi = axios.create({
    baseURL: Constant.API
});

TaskApi.interceptors.request.use(async(request) => {
    let token;
    try {
        token = await AsyncStorage.getItem('TaskUser');
    } catch (e) {

    }
   
    request.headers.Authorization = `Bearer ${token}`;
    return request;
}, async(error) => {
    console.log(error.response);
    if(error.response.status == 401) {
        await AsyncStorage.removeItem('TaskUser');
    }
    return Promise.reject(error);
})

TaskApi.interceptors.response.use(async(response) => {
    return response;
}, async(error) => {
    if (error.response.status == 401) {
        await AsyncStorage.removeItem('TaskUser');
    }
    return Promise.reject(error.response.data);
})

export default TaskApi;