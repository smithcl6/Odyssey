import { useContext, type JSX } from "react";
import { ThemeContext } from "./ThemeContext";
import AudioManager from "./AudioManager";
import { CiDark } from "react-icons/ci";
import { GiTriforce, GiSuperMushroom } from "react-icons/gi";
import { MenuItem, Select } from "@mui/material";

interface ThemeIcon {
    key: string,
    icon: JSX.Element
}

function Navbar() {
    const themeContext = useContext(ThemeContext);

    const themes: ThemeIcon[] = [
        {
            key: 'dark',
            icon: <CiDark />
        },
        {
            key: 'zelda',
            icon: <GiTriforce />
        },
        {
            key: 'mario',
            icon: <GiSuperMushroom />
        },
    ];

    const options = themes.map(
        theme => <MenuItem className="flex justify-center text-white hover:bg-gray-600 text-4xl" key={theme.key} value={theme.key}>{theme.icon}</MenuItem>
    );

    return (
        <header className="flex justify-between p-4 sticky top-0 z-10 bg-gray-900">
            <h1>Current theme: { themeContext.theme }</h1>
            <Select
                className="text-white bg-gray-800 text-4xl rounded-2xl"
                name="Theme"
                value={themeContext.theme}
                onChange={(value) => themeContext.setTheme(value.target.value)}
                notched
            >
                {options}
            </Select>
            <AudioManager></AudioManager>
        </header>
    )
}

export default Navbar;