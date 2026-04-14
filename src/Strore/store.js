import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/UserSlices.jsx';

const store = configureStore({
    reducer: {
        users: userSlice,
    }
});

export default store;