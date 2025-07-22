import { useContext, type JSX } from 'react';
import { ThemeContext } from './ThemeContext';
import AudioManager from './AudioManager';
import { CiDark } from 'react-icons/ci';
import { GiTriforce, GiSuperMushroom } from 'react-icons/gi';
import { MenuItem, Select } from '@mui/material';

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
            icon: <CiDark />,
        },
        {
            key: 'zelda',
            icon: <GiTriforce />,
        },
        {
            key: 'mario',
            icon: <GiSuperMushroom />,
        },
    ];

    const options = themes.map((theme) => (
        <MenuItem
            className='flex justify-center text-4xl text-white hover:bg-gray-600'
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
                    className='rounded-l-2xl bg-gray-800 text-4xl text-white hover:bg-gray-700'
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
