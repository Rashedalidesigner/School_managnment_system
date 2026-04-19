import { createSlice } from '@reduxjs/toolkit';


const StudentleaveSlice = createSlice({
    name: "studentleave",
    initialState: {
        title: "studentleave data",
        data: []
    },
    reducers: {
        getStudentleave(state, action) {
            state.data = action.payload;
        },
        addStudentleave(state, action) {
            state.data.push(action.payload);
        },
        updateStudentleave: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },
        removeStudentleave: (state, action) => {
            state.data = state.data.filter(item => item._id.toString() !== action.payload._id.toString());
        },
    }
});

export const { getStudentleave, addStudentleave, updateStudentleave, removeStudentleave } = StudentleaveSlice.actions;
export default StudentleaveSlice.reducer;
