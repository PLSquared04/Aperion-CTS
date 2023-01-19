import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userDetails";

const store = configureStore({
    reducer:{
        user:userReducer
    }
})

export default store;