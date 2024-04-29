import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    address:"",
    postal:"",
    phone:"",
    education:"",
    year:"",
    submitData:{
    address:"",
    name:"",
    postal:"",
    phone:"",
    education:"",
    year:""
    }
}

export const formSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        setName : (state,action) => {
            state.name = action.payload.name;
        },
        setAddress : (state,action) => {
            state.address = action.payload.address;
        },
        setPostal : (state,action) => {
            state.postal = action.payload.postal;
        },
        setPhone : (state,action) => {
            state.phone = action.payload.phone;
        },
        setEducation : (state,action) => {
            state.education = action.payload.education;
        },
        setyear : (state,action) => {
            state.year = action.payload.year;
        },
        submitForm : (state) => {
            state.submitData = {
            address:state.address,
            name:state.name,
            postal:state.postal,
            phone:state.phone,
            education:state.education,
            year:state.year
            }
        },
        resetForm: (state) => {
            state.name = '';
            state.address = '';
            state.postal = '';
            state.phone = '';
            state.education = '';
            state.year = '';
            
        }
        
    }
})

export const formActions = formSlice.actions;
export const formReducers = formSlice.reducer;