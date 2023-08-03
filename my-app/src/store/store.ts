import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/reducer";
import { filmsReducer } from "./films/reducer";
import  favoritesReducer  from "./favorites/favoritesReducer";

const todo = () => {
    return 100;
}


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        favorites: favoritesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch