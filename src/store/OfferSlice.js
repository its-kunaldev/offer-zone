import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allOffers: [
        {
            name: 'The Burger King',
            location: 'Modal town',
            image: 'offer3',
            discription: 'Combo pack starting from',
            price: 199,
            category: 'food'
        },
        {
            name: 'KFC',
            location: 'Central town',
            image: 'offer7',
            discription: 'Combo pack starting from',
            price: 199,
            category: 'food'
        },
        {
            name: 'OYO',
            location: 'Doaba chowk',
            image: 'offer8',
            discription: 'Combo pack starting from',
            price: 199,
            category: 'room'
        },
        {
            name: 'D-Mart',
            location: 'Pathankot byepass',
            image: 'offer5',
            discription: 'Combo pack starting from',
            price: 199,
            category: 'home'
        },
        {
            name: 'Pirates of the grill',
            location: 'Basti pura',
            image: 'offer10',
            discription: 'Combo pack starting from',
            price: 199,
            category: 'food'
        },
        {
            name: 'Barbeque Nation',
            location: 'Rainbow Road',
            image: 'offer9',
            discription: 'Combo pack starting from',
            price: 199,
            category: 'food'
        },
        {
            name: 'Subway',
            location: 'Modal town',
            image: 'offer2',
            discription: 'Combo pack starting from',
            price: 199,
            category: 'food'
        },
        {
            name: 'Gucci',
            location: 'Modal town',
            image: 'offer2',
            discription: 'T-shirts starting from',
            price: 2999,
            category: 'fashion'
        },
        {
            name: 'Armani',
            location: 'Central town',
            image: 'offer2',
            discription: 'Zeans starting from',
            price: 5999,
            category: 'fashion'
        },
        {
            name: 'BMS',
            location: 'Kishan pura',
            image: 'offer2',
            discription: 'Jackets starting from 4999',
            price: 199,
            category: 'fashion'
        },
        {
            name: 'Oppo',
            location: 'monika tower',
            image: 'offer2',
            discription: 'oppo F21 starting from 14999',
            price: 199,
            category: 'mobile'
        },
        {
            name: 'RS Electronics',
            location: 'Preet nagar',
            image: 'offer2',
            discription: 'single service of',
            price: 99,
            category: 'Electronics'
        },
        {
            name: 'Quality play',
            location: 'Gujja peer',
            image: 'offer2',
            discription: 'cricket kit starting from ',
            price: 2999,
            category: 'sports'
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