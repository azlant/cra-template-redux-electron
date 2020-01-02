import { createSlice } from '@reduxjs/toolkit'

// a concern with this approach: it needs its own approach to reducers
// that makes it difficult to use Immutable and contains magic, so it ends up
// hiding a lot of what it's generating.

const applicationSlice = createSlice({
    name: 'application',
    initialState: { 
        flag: false 
    },
    reducers: {
        toggleFlag(state) {
            state.flag = !state.flag;
        }
    }
});

export { 
    applicationSlice,
};