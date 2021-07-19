
import {useTheme} from '../context/ThemeContext'

function Header() {

    const {theme, settheme} = useTheme();

    return (
        <div>
            Active Theme: {theme}
            <br />
            <button onClick={() => settheme(theme === "light" ? "dark": "light")}>Change Theme</button>
        </div>
    )
}

export default Header
