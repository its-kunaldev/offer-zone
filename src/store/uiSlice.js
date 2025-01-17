import { createSlice } from '@reduxjs/toolkit';


const uiSlice = createSlice({
    name: 'UI',
    initialState: {showCitiesmodal: false, isFocus: false, isCredentialValid: true, isWarningRendered: false, isLogin: false},
    reducers: {
        showModal(state){
            state.showCitiesmodal = !state.showCitiesmodal;
        },
        showSearchbar(state){
            state.isFocus = !state.isFocus;
        },
        checkValidity(state, action){
            state.isCredentialValid = action.payload;
        },
        warningRender(state, action){
            state.isWarningRendered = action.payload;
        },
        loginValidity(state){
            state.isLogin = !state.isLogin;
        }
    }
});

export const uiSliceReducer = uiSlice.reducer;

export  const uiActions = uiSlice.actions;