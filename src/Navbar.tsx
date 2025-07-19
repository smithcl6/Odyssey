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
        <header className="flex justify-end p-2 sm:p-8 fixed w-screen bg-transparent">
            <span className="flex">
            <Select
                    className="text-white bg-gray-800 hover:bg-gray-700 text-4xl rounded-l-2xl"
                name="Theme"
                value={themeContext.theme}
                onChange={(value) => themeContext.setTheme(value.target.value)}
                notched
            >
                {options}
            </Select>
                <AudioManager />
            </span>
        </header>
    )
}

export default Navbar;