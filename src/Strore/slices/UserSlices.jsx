import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: "user",
    initialState: {
        title: "user data",
        userdata: []
    },
    reducers: {

        getUser: (state, action) => {
            state.userdata = action.payload;
            // console.log(state.userdata + 'from get user slice')
        },

        addUser: (state, action) => {
            state.userdata.push(action.payload);
        },

        updateUser: (state, action) => {
            const updatedUser = action.payload;

            state.userdata = state.userdata.map(user =>
                user.id === updatedUser.id ? updatedUser : user
            );
        },

        removeUser: (state, action) => {
            const userId = action.payload;

            state.userdata = state.userdata.filter(
                user => user.id !== userId
            );
        }
    }
});

export const { getUser, addUser, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;



