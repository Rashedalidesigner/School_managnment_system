import { createSlice } from '@reduxjs/toolkit';


const StudentSlice = createSlice({
    name: "student",
    initialState: {
        title: "student data",
        data: []
    },
    reducers: {
        getStudent(state, action) {
            state(action.payload);
        },
        addStudent(state, action) {
            state.push(action.payload);
        },
        updateStudent(state, action) {
            state(action.payload)
        },
        removeStudent(state, action) {
            state(action.payload)
        },
    }
});

export const { getStudent, addStudent, updateStudent, removeStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
