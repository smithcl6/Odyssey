import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
    const themeContext = useContext(ThemeContext);

    const themes = ['dark', 'zelda', 'mario'];
    const options = themes.map(
        theme => <option value={theme} className={theme}>{theme}</option>
    );

    return (
        <header className="flex justify-between m-4">
            <h1 className="bg-blue-500 zelda:bg-amber-500 mario:bg-red-500">Theme Test</h1>
            <label htmlFor="themes"></label>
            <select id="themes" onChange={(value) => themeContext.setTheme(value.target.value)}>
                {options}
            </select>
            <h3>Current theme: { themeContext.theme }</h3>
        </header>
    )
}

export default Navbar;