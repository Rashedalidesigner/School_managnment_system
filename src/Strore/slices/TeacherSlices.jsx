import { createSlice } from '@reduxjs/toolkit';


const TeacherSlice = createSlice({
    name: "teacher",
    initialState: {
        title: "teacher data",
        data: []
    },
    reducers: {
        getTeacher: (state, action) => {
            state.data = action.payload;
        },
        addTeacher(state, action) {
            state.data.push(action.payload);
        },
        updateTeacher: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },
        removeTeacher: (state, action) => {
            state.data = state.data.filter(item => item._id.toString() !== action.payload._id.toString());
        },
    }
});

export const { getTeacher, addTeacher, updateTeacher, removeTeacher } = TeacherSlice.actions;
export default TeacherSlice.reducer;
