import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: "user",
    initialState: {
        title: "user data",
        data: []
    },
    reducers: {

        getUser: (state, action) => {
            state.data = action.payload;
        },

        addUser: (state, action) => {
            state.data.push(action.payload);
        },

        updateUser: (state, action) => {
            state.data = state.data.map(item =>
                item._id.toString() === action.payload._id.toString()
                    ? { ...item, ...action.payload }
                    : item
            );
        },

        removeUser: (state, action) => {
            state.data = state.data.filter(item => item._id.toString() !== action.payload);
        },
    }
});

export const { getUser, addUser, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;



