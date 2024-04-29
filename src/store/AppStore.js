import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { formReducers } from "./form-reducer";

const rootReducer = combineReducers({
    formData: formReducers
});

export const store = configureStore({
    reducer:rootReducer,
});