import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allOffers: [
        {
            owner: 'kunal',
            name: 'The Burger King',
            location: 'Modal town',
            image: 'offer3',
            discription: 'burger just at 99',
            price: 199,
            category: 'food',
            city: 'jalandhar',
            offer: 20,
            state: 'punjab'
        },
        {
            owner: 'bhavnish',
            name: 'KFC',
            location: 'Central town',
            image: 'offer7',
            discription: 'veg and non-veg',
            price: 199,
            category: 'food',
            city: 'jalandhar',
            offer: 30,
            state: 'punjab'
        },
        {
            owner: 'kapil',
            name: 'OYO',
            location: 'Doaba chowk',
            image: 'offer8',
            discription: 'full privacy',
            price: 199,
            category: 'room',
            city: 'jalandhar',
            offer: 50,
            state: 'punjab'
        },
        {
            owner: 'jagdeep',
            name: 'D-Mart',
            location: 'Pathankot byepass',
            image: 'offer5',
            discription: 'Combo pack',
            price: 199,
            category: 'home',
            city: 'jalandhar',
            offer: 60,
            state: 'punjab'
        },
        {
            owner: 'sonali',
            name: 'Pirates of the grill',
            location: 'Basti pura',
            image: 'offer10',
            discription: 'grilled sandwitch',
            price: 199,
            category: 'food',
            city: 'new dehli',
            offer: 20,
            state: 'punjab'
        },
        {
            owner: 'Love preet',
            name: 'Barbeque Nation',
            location: 'Rainbow Road',
            image: 'offer9',
            discription: 'fresh meal',
            price: 199,
            category: 'food',
            city: 'chandigarh',
            offer: 70,
            state: 'punjab'
        },
        {
            owner: 'Subhash',
            name: 'Subway',
            location: 'Modal town',
            image: 'offer2',
            discription: 'Combo pack',
            price: 199,
            category: 'food',
            city: 'jalandhar',
            offer: 50,
            state: 'punjab'
        },
        {
            owner: 'Vinay chopra',
            name: 'Gucci',
            location: 'Modal town',
            image: 'offer11',
            discription: 'T-shirts starting from 399',
            price: 2999,
            category: 'fashion',
            city: 'jalandhar',
            offer: 10,
            state: 'punjab'
        },
        {
            owner: 'utkarsh',
            name: 'Armani',
            location: 'Central town',
            image: 'offer12',
            discription: 'Zeans starting from 599',
            price: 5999,
            category: 'fashion',
            city: 'ludhiana',
            offer: 20,
            state: 'punjab'
        },
        {
            owner: 'rohan',
            name: 'BMS',
            location: 'Kishan pura',
            image: 'offer13',
            discription: 'Jackets',
            price: 199,
            category: 'fashion',
            city: 'jalandhar',
            offer: 30,
            state: 'punjab'
        },
        {
            owner: 'aman',
            name: 'Oppo',
            location: 'monika tower',
            image: 'offer14',
            discription: 'oppo F21 ',
            price: 199,
            category: 'mobile',
            city: 'new dehli',
            offer: 40,
            state: 'punjab'
        },
        {
            owner: 'Rakesh',
            name: 'RS Electronics',
            location: 'Preet nagar',
            image: 'offer15',
            discription: 'multiple service ',
            price: 99,
            category: 'electronics',
            city: 'jalandhar',
            offer: 50,
            state: 'punjab'
        },
        {
            owner: 'Chirag Thakur',
            name: 'Quality play',
            location: 'Gujja peer',
            image: 'offer16',
            discription: 'cricket kit ',
            price: 2999,
            category: 'sports',
            city: 'new dehli',
            offer: 70,
            state: 'punjab'
        },
    ],
    allCities: ['new dehli','jalandhar', 'amritsar', 'ludhiana', 'phagwara', 'batala', 'kapurthala', 'firojpur', 'chandigarh', 'patiala', 'nabha'],
    currentCity: '',
    isRegister: false
};

const OfferSlice = createSlice({
    name: 'offer',
    initialState: initialState,
    reducers: {
        addOffer(state, action) {
            state.allOffers.unshift(action.payload);
            state.allCities.push(action.payload.city);
        },

        currentLocation(state, action) {
            state.currentCity = action.payload;
        },

        userRegister(state){
            state.isRegister = !state.isRegister;
        }
    }
});

export const OfferSliceReducer = OfferSlice.reducer;

export const OfferSliceActions = OfferSlice.actions;