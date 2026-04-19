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
            state.data.push(action.payload);
        },
        updateTeacherLeave: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },
        removeTeacherLeave: (state, action) => {
            state.data = state.data.filter(item => item._id.toString() !== action.payload._id.toString());
        },
    }
});

export const { getTeacherLeave, addTeacherLeave, updateTeacherLeave, removeTeacherLeave } = TeacherLeaveSlice.actions;
export default TeacherLeaveSlice.reducer;
