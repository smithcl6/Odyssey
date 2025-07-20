import { createContext } from "react";

export interface Theme {
    theme: string;
    setTheme: (newTheme: string) => void;
}

/**
 * Stores the context of what state the app's theme should be.
 */
export const ThemeContext = createContext<Theme>({
    theme: 'dark',
    setTheme: () => {},
});
