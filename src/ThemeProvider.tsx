import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }: { children: React.ReactNode}) {
    const [theme, setTheme] = useState<string>('dark');

    // Update html tag to include new theme
    useEffect(() => {
        document.documentElement.classList.add(theme);
        // cleanup previous theme
        return () => document.documentElement.classList.remove(theme);
    }, [theme])

    const handleSetTheme = (newTheme: string) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext value={{ theme, setTheme: handleSetTheme}}>
            {children}
        </ThemeContext>
    );
}