import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openAlert: true,
}
export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        closeAlert: (state) => {
            state.openAlert = false;
        },
    }
})

export default alertSlice.reducer;
export const { closeAlert } = alertSlice.actions;