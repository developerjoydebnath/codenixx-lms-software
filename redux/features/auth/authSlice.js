"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogIn: (state, action) => {
            (state.user = action.payload.user), (state.loading = action.payload.loading);
        },
        userLogOut: (state) => {
            (state.user = null), (state.loading = false);
        },
    },
});

export default authSlice.reducer;
export const { userLogIn, userLogOut } = authSlice.actions;
