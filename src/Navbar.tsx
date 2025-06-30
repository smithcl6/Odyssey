import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Audio from "./Audio";

function Navbar() {
    const themeContext = useContext(ThemeContext);

    const themes = ['dark', 'zelda', 'mario'];
    const options = themes.map(
        theme => <option value={theme} className={theme}>{theme}</option>
    );

    return (
        <header className="flex justify-between p-4 bg-emerald-900">
            <h1>Theme Test</h1>
            <label htmlFor="themes"></label>
            <select id="themes" onChange={(value) => themeContext.setTheme(value.target.value)}>
                {options}
            </select>
            <Audio></Audio>
            <h3>Current theme: { themeContext.theme }</h3>
        </header>
    )
}

export default Navbar;