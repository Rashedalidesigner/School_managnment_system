import { createSlice } from '@reduxjs/toolkit';


const AssignmentSlice = createSlice({
    name: "assignment",
    initialState: {
        title: "assignment data",
        data: []
    },
    reducers: {
        getassignment: (state, action) => {
            // console.log(state.data)
            state.data = action.payload;
        },
        addassignment(state, action) {
            state.data.push(action.payload);
        },
        updateassignment: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },
        removeassignment: (state, action) => {
            state.data = state.data.filter(item => item._id.toString() !== action.payload._id.toString());
        },
    }
});

export const { getassignment, addassignment, updateassignment, removeassignment } = AssignmentSlice.actions;
export default AssignmentSlice.reducer;
