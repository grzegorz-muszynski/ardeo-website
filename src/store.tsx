import { configureStore } from '@reduxjs/toolkit';
import flagReducer from './flagSlice';

export const store = configureStore({
    reducer: {
        flag: flagReducer,
    }
});