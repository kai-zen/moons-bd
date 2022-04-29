import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentLevel: localStorage.getItem("currentLevel") ?
        JSON.parse(localStorage.getItem("currentLevel")) : 1,
}
export const levelsSlice = createSlice({
    name: 'levels',
    initialState,
    reducers: {
        goToNextLevel: (state) => {
            state.currentLevel += 1;
            localStorage.setItem("currentLevel", JSON.stringify(state.currentLevel))
        },
    }
})

export default levelsSlice.reducer;
export const { goToNextLevel } = levelsSlice.actions;