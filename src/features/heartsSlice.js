import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heartsCount: localStorage.getItem("heartsCount") ?
        JSON.parse(localStorage.getItem("heartsCount")) : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    bigHeart: false
}
export const heartsSlice = createSlice({
    name: 'hearts',
    initialState,
    reducers: {
        addHeart: (state) => {
            state.heartsCount.push(1);
            localStorage.setItem("heartsCount", JSON.stringify(state.heartsCount))
        },
        removeHeart: (state) => {
            state.heartsCount.pop();
            localStorage.setItem("heartsCount", JSON.stringify(state.heartsCount))
        },
        giveBigHeart: state => {
            state.bigHeart = true
        }
    }
})

export default heartsSlice.reducer;
export const { addHeart, removeHeart, giveBigHeart } = heartsSlice.actions;