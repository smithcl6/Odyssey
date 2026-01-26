import { useContext, type JSX } from 'react';
import { ThemeContext } from './ThemeContext';
import AudioManager from './AudioManager';
import { CiDark } from 'react-icons/ci';
import { GiTriforce } from 'react-icons/gi';
import { MenuItem, Select } from '@mui/material';
import Mushroom from '/src/assets/mushroom.svg?react';

interface ThemeIcon {
    key: string;
    icon: JSX.Element;
}

/**
 * This component will house navigation at a later time. Not enough content to need that feature as of now.
 * Navbar includes UI for changing the theme as well as the AudioManager.
 * @returns the page's navigation menu.
 */
function Navbar() {
    const themeContext = useContext(ThemeContext);

    const themes: ThemeIcon[] = [
        {
            key: 'dark',
            icon: <CiDark className='small-icon' />,
        },
        {
            key: 'zelda',
            icon: <GiTriforce className='small-icon' />,
        },
        {
            key: 'mario',
            icon: <Mushroom className='small-icon' />,
        },
    ];

    const options = themes.map((theme) => (
        <MenuItem
            className='bg-color-3 flex justify-center text-white'
            key={theme.key}
            value={theme.key}
        >
            {theme.icon}
        </MenuItem>
    ));

    return (
        <header className='flex w-screen justify-end'>
            <span className='fixed z-10 flex p-4 sm:p-8'>
                <Select
                    className='bg-color-2 rounded-l-2xl text-white'
                    name='Theme'
                    value={themeContext.theme}
                    onChange={(value) =>
                        themeContext.setTheme(value.target.value)
                    }
                    notched
                >
                    {options}
                </Select>
                <AudioManager />
            </span>
        </header>
    );
}

export default Navbar;
