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
            state.push(action.payload);
        },
        updateclass(state, action) {
            state(action.payload)
        },
        removeclass(state, action) {
            state(action.payload)
        },
    }
});

export const { getclass, addclass, updateclass, removeclass } = ClassSlice.actions;
export default ClassSlice.reducer;
