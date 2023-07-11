import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/reducer";
import { filmsReducer } from "./films/reducer";

const todo = () => {
    return 100;
}


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        films: filmsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch