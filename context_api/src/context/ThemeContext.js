import {createContext, useState, useEffect, useContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, settheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const values = {
        theme,
        settheme,
    };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext);

export {useTheme, ThemeProvider};