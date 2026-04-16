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
            state.push(action.payload);
        },
        updateassignment(state, action) {
            state(action.payload)
        },
        removeassignment(state, action) {
            state(action.payload)
        },
    }
});

export const { getassignment, addassignment, updateassignment, removeassignment } = AssignmentSlice.actions;
export default AssignmentSlice.reducer;
