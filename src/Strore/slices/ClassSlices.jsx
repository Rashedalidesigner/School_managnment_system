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
        removeclass: (state, action) => {
            const newdata = state.data.filter((item) => item.ClassId !== action.payload);
            console.log(newdata, "data form slice");
            state.data = newdata;
        },
    }
});

export const { getclass, addclass, updateclass, removeclass } = ClassSlice.actions;
export default ClassSlice.reducer;
