import { configureStore } from '@reduxjs/toolkit';
import heartsReducer from './../features/heartsSlice';
import levelsReducer from './../features/levelsSlice';
import alertReducer from './../features/alertSlice';

export const store = configureStore({
    reducer: {
        hearts: heartsReducer,
        levels: levelsReducer,
        alert: alertReducer
    },
})