import { createSlice } from '@reduxjs/toolkit';


const FeeSlice = createSlice({
    name: "Fee",
    initialState: {
        title: "Fee data",
        data: []
    },
    reducers: {
        getFee(state, action) {
            state.data = action.payload;
        },
        addFee(state, action) {
            state.data.push(action.payload);
        },
        updateFee: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },
        removeFee: (state, action) => {
            state.data = state.data.filter(item => item._id.toString() !== action.payload._id.toString());
        },
    }
});

export const { getFee, addFee, updateFee, removeFee } = FeeSlice.actions;
export default FeeSlice.reducer;
