import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API CALL
export const fetchDashboard = createAsyncThunk(
    "dashboard/fetchDashboard",
    async () => {
        const res = await axios.get("http://localhost:5000/api/dashboard");
        return res.data;
    }
);

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        data: {},
        loading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboard.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDashboard.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            });
    },
});

export default dashboardSlice.reducer;