import { createSlice } from '@reduxjs/toolkit'

export const flagSlice = createSlice({
    name: 'flag',
    initialState: false,
    reducers: {
        toggleFlag(state) {
            console.log(state);
            state = !state;
            console.log(state);
        }
    }
})