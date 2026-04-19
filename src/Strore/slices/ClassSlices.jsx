import { createSlice } from '@reduxjs/toolkit';


const ClassSlice = createSlice({
    name: "class",
    initialState: {
        title: "class data",
        data: []
    },
    reducers: {
        getclass(state, action) {
            state.data = action.payload;
        },
        addclass(state, action) {
            state.data.push(action.payload);
        },
        updateclass: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },
        removeclass: (state, action) => {
            state.data = state.data.filter(item => item._id.toString() !== action.payload._id.toString());
        },
    }
});

export const { getclass, addclass, updateclass, removeclass } = ClassSlice.actions;
export default ClassSlice.reducer;
