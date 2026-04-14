import { createSlice } from '@reduxjs/toolkit';


const StudentleaveSlice = createSlice({
    name: "studentleave",
    initialState: {
        title: "studentleave data",
        data: []
    },
    reducers: {
        getStudentleave(state, action) {
            state(action.payload);
        },
        addStudentleave(state, action) {
            state.push(action.payload);
        },
        updateStudentleave(state, action) {
            state(action.payload)
        },
        removeStudentleave(state, action) {
            state(action.payload)
        },
    }
});

export const { getStudentleave, addStudentleave, updateStudentleave, removeStudentleave } = StudentleaveSlice.actions;
export default StudentleaveSlice.reducer;
