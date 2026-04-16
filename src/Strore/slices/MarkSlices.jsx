import { createSlice } from '@reduxjs/toolkit';


const MarkSlice = createSlice({
    name: "mark",
    initialState: {
        title: "mark data",
        data: []
    },
    reducers: {
        getmark(state, action) {
            state.data = action.payload;
        },
        addmark(state, action) {
            state.push(action.payload);
        },
        updatemark(state, action) {
            state(action.payload)
        },
        removemark(state, action) {
            state(action.payload)
        },
    }
});

export const { getmark, addmark, updatemark, removemark } = MarkSlice.actions;
export default MarkSlice.reducer;
