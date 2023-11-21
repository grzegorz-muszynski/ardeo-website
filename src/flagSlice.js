import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'polish'
}

export const flagSlice = createSlice({
    name: 'flag',
    initialState,
    reducers: {
        chooseLanguage: (state, action) => {
            state.language = action.payload
        },
    }
})

export const { chooseLanguage } = flagSlice.actions;

export default flagSlice.reducer;