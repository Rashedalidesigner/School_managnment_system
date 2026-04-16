import { createSlice } from '@reduxjs/toolkit';


const TeacherLeaveSlice = createSlice({
    name: "teacherleave",
    initialState: {
        title: "teacherleave data",
        data: []
    },
    reducers: {
        getTeacherLeave(state, action) {
            state.data = action.payload;
        },
        addTeacherLeave(state, action) {
            state.push(action.payload);
        },
        updateTeacherLeave(state, action) {
            state(action.payload)
        },
        removeTeacherLeave(state, action) {
            state(action.payload)
        },
    }
});

export const { getTeacherLeave, addTeacherLeave, updateTeacherLeave, removeTeacherLeave } = TeacherLeaveSlice.actions;
export default TeacherLeaveSlice.reducer;
