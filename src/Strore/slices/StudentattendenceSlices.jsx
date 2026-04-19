import { createSlice } from '@reduxjs/toolkit';


const StudnetattendenceSlice = createSlice({
    name: "studnetattendence",
    initialState: {
        title: "studentattendence data",
        data: []
    },
    reducers: {
        getStudnetattendence(state, action) {
            state.data = action.payload;
        },
        addStudnetattendence(state, action) {
            state.data.push(action.payload);
        },
        updateStudnetattendence: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },
        removeStudnetattendence: (state, action) => {
            state.data = state.data.filter(item => item._id.toString() !== action.payload._id.toString());
        },
    }
});

export const { getStudnetattendence, addStudnetattendence, updateStudnetattendence, removeStudnetattendence } = StudnetattendenceSlice.actions;
export default StudnetattendenceSlice.reducer;
