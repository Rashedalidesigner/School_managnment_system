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

            state.data.push(action.payload);
        },
        updatemark: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },

        removemark: (state, action) => {
            state.data = state.data.filter(item => {
                console.log(item);
                return item._id.toString() !== action.payload._id.toString();
            });
        },
    }
});

export const { getmark, addmark, updatemark, removemark } = MarkSlice.actions;
export default MarkSlice.reducer;
