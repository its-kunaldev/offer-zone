import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allOffers: [
        {
            name: 'The Burger King',
            location: 'Modal town',
            image: 'offer3',
            discription: 'Combo pack starting from',
            price: 199
        },
        {
            name: 'KFC',
            location: 'Central town',
            image: 'offer7',
            discription: 'Combo pack starting from',
            price: 199
        },
        {
            name: 'OYO',
            location: 'Doaba chowk',
            image: 'offer8',
            discription: 'Combo pack starting from',
            price: 199
        },
        {
            name: 'D-Mart',
            location: 'Pathankot byepass',
            image: 'offer5',
            discription: 'Combo pack starting from',
            price: 199
        },
        {
            name: 'Pirates of the grill',
            location: 'Basti pura',
            image: 'offer10',
            discription: 'Combo pack starting from',
            price: 199
        },
        {
            name: 'Barbeque Nation',
            location: 'Rainbow Road',
            image: 'offer9',
            discription: 'Combo pack starting from',
            price: 199
        },
        {
            name: 'Subway',
            location: 'Modal town',
            image: 'offer2',
            discription: 'Combo pack starting from',
            price: 199
        },
    ],
};

const OfferSlice = createSlice({
    name: 'offer',
    initialState: initialState,
    reducers: {
        // addOffer(state) {
        //     state.allOffers = state.allOffers;
        // }
    }
});

export const OfferSliceReducer = OfferSlice.reducer;

export const OfferSliceActions = OfferSlice.actions;