import { createContext, FC, ReactNode, useContext, useState } from "react";


type Theme = 'light' | 'dark';

interface IAppContext {
    toggleTheme: () => void;
    isDarkTheme: () => boolean;
}


export const AppContext = createContext<IAppContext>({
    toggleTheme: () => {},
    isDarkTheme: () => false
});


interface IAppProvider{
    children: ReactNode;
}


export const AppProvider: FC<IAppProvider> = ({children}) => {
    const [theme, setTheme] = useState<Theme>('dark')

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    const isDarkTheme = () => theme === 'dark';

    return (
        <AppContext.Provider value={{toggleTheme, isDarkTheme}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);