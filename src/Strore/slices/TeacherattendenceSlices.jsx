import { createSlice } from '@reduxjs/toolkit';


const TeacherattendenceSlice = createSlice({
    name: "teacherattendence",
    initialState: {
        title: "teacherattendence data",
        data: []
    },
    reducers: {
        getTeacherattendence(state, action) {
            state(action.payload);
        },
        addTeacherattendence(state, action) {
            state.push(action.payload);
        },
        updateTeacherattendence(state, action) {
            state(action.payload)
        },
        removeTeacherattendence(state, action) {
            state(action.payload)
        },
    }
});

export const { getTeacherattendence, addTeacherattendence, updateTeacherattendence, removeTeacherattendence } = TeacherattendenceSlice.actions;
export default TeacherattendenceSlice.reducer;
