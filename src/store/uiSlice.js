import { createSlice } from '@reduxjs/toolkit';


const uiSlice = createSlice({
    name: 'UI',
    initialState: {showCitiesmodal: false, isFocus: false},
    reducers: {
        showModal(state){
            state.showCitiesmodal = !state.showCitiesmodal;
        },
        showSearchbar(state){
            state.isFocus = !state.isFocus;
        }
    }
});

export const uiSliceReducer = uiSlice.reducer;

export  const uiActions = uiSlice.actions;