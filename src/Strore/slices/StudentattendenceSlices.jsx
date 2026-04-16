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
            state.push(action.payload);
        },
        updateStudnetattendence(state, action) {
            state(action.payload)
        },
        removeStudnetattendence(state, action) {
            state(action.payload)
        },
    }
});

export const { getStudnetattendence, addStudnetattendence, updateStudnetattendence, removeStudnetattendence } = StudnetattendenceSlice.actions;
export default StudnetattendenceSlice.reducer;
