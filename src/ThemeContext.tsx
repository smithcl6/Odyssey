import { createContext } from 'react';

export interface Theme {
    theme: string;
    setTheme: (newTheme: string) => void;
}

/**
 * Stores the context of what state the app's theme should be.
 * This default object is only used if there is no matching provider.
 */
export const ThemeContext = createContext<Theme>({
    theme: 'dark',
    setTheme: () => {},
});
