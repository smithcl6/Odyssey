import { createContext } from "react";

interface Theme {
    theme: string;
    setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<Theme>({
    theme: 'dark',
    setTheme: () => {},
});
