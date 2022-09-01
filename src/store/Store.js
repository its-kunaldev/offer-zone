import { configureStore } from '@reduxjs/toolkit';
import { uiSliceReducer } from './uiSlice';
import { OfferSliceReducer } from './OfferSlice';



const store = configureStore({
    reducer: {
        uiSliceReducer,
        OfferSliceReducer
    }
});

export default store;