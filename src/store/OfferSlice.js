import { createSlice } from '@reduxjs/toolkit';


const OfferSlice = createSlice({
    name: 'offer',
    initialState: {allOffer: []},
    reducers: {
        addOffer(state, action){
            
        }
    }
});

export const OfferSliceReducer = OfferSlice.reducer;

export  const uiActions = OfferSlice.actions;