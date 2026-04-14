import { createSlice } from '@reduxjs/toolkit';


const TeacherSlice = createSlice({
    name: "teacher",
    initialState: {
        title: "teacher data",
        data: []
    },
    reducers: {
        getTeacher(state, action) {
            state(action.payload);
        },
        addTeacher(state, action) {
            state.push(action.payload);
        },
        updateTeacher(state, action) {
            state(action.payload)
        },
        removeTeacher(state, action) {
            state(action.payload)
        },
    }
});

export const { getTeacher, addTeacher, updateTeacher, removeTeacher } = TeacherSlice.actions;
export default TeacherSlice.reducer;
