import { TOGGLE_THEME } from "./actionTypes";
import { IToggleThemeAction } from "./interfaces";

export const toggleThemeAction = (): IToggleThemeAction => {
    return {
        type: TOGGLE_THEME,
    }
} 