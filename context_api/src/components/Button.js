import {useTheme} from '../context/ThemeContext'

function Button() {
    const {theme, settheme} = useTheme();
    return (
        <div>
            Active Theme: {theme}
            <br />
            <br />

            <button onClick={() => settheme(theme === "light" ? "dark": "light")}>Change Theme</button>
        </div>
    )
}

export default Button
