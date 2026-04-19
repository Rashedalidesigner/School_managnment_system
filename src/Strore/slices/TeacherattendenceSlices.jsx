import { createSlice } from '@reduxjs/toolkit';


const TeacherattendenceSlice = createSlice({
    name: "teacherattendence",
    initialState: {
        title: "teacherattendence data",
        data: []
    },
    reducers: {
        getTeacherattendence(state, action) {
            state.data = action.payload;
        },
        addTeacherattendence(state, action) {
            state.data.push(action.payload);
        },
        updateTeacherattendence: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },
        removeTeacherattendence: (state, action) => {
            state.data = state.data.filter(item => item._id.toString() !== action.payload._id.toString());
        },
    }
});

export const { getTeacherattendence, addTeacherattendence, updateTeacherattendence, removeTeacherattendence } = TeacherattendenceSlice.actions;
export default TeacherattendenceSlice.reducer;
