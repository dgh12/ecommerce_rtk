import { configurestore } from '@reduxjs/toolkit';
import reducer from './Components/CartSlice';

const store = configurestore({
    reducer: {
        cart: reducer,
    },
});

export default store;