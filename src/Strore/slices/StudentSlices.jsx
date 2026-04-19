import { createSlice } from '@reduxjs/toolkit';


const StudentSlice = createSlice({
    name: "student",
    initialState: {
        title: "student data",
        data: []
    },
    reducers: {
        getStudent(state, action) {
            state.data = action.payload;
        },
        addStudent(state, action) {
            state.data.push(action.payload);
        },
        updateStudent: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },
        removeStudent: (state, action) => {
            // console.log(state.data)
            state.data = state.data.filter(item => {
                console.log(state.data);
                return item._id.toString() !== action.payload._id.toString()
            });
        },
    }
});

export const { getStudent, addStudent, updateStudent, removeStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
