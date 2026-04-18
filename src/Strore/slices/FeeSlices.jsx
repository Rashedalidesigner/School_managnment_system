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
            state.push(action.payload);
        },
        updateFee(state, action) {
            state(action.payload)
        },
        removeFee(state, action) {
            state(action.payload)
        },
    }
});

export const { getFee, addFee, updateFee, removeFee } = FeeSlice.actions;
export default FeeSlice.reducer;
