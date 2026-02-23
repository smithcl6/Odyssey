# Demo Outline
1) Explain Purpose of Project
2) Focus on Theme Functionality

[Link to Project](https://smithcl6.github.io/Odyssey/)
## What is Odyssey?
This project serves as my personal portfolio. It was created using React and Tailwind.

The project name, "Odyssey" is indeed a reference to Super Mario Odyssey. While I will not be traveling to different kingdoms and fighting Bowser, I will be tracking experiences and projects here.

## Theming Functionality
The following code snippets show how I implemented different themes.
### ThemeContext.tsx
Defines what makes up a Theme object, and creates a ThemeContext which will be accessed by other components.
```typescript
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
```

### ThemeProvider.tsx
ThemeProvider allows the state of the theme to be tracked and modified throughout the app.
It also modifies the DOM in a way that allows Tailwind to apply theme-specific styling.
```typescript
import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

/**
 * Provides the theme context to child components.
 * Updates the html tag to include the theme as a class.
 * @returns the theme context the rest of the app should be aware of.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<string>('dark');

    // Update html tag to include new theme
    useEffect(() => {
        document.documentElement.classList.add(theme);
        // cleanup previous theme
        return () => document.documentElement.classList.remove(theme);
    }, [theme]);

    const handleSetTheme = (newTheme: string) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext value={{ theme: theme, setTheme: handleSetTheme }}>
            {children}
        </ThemeContext>
    );
}
```

### App.tsx
This shows that ThemeProvider is "providing" for the entire React project.
```typescript
/**
 * Going from top to bottom, App displays every main section of the webpage.
 * @returns the entirety of the built React project.
 */
function App() {
    return (
        <ThemeProvider>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className='bg-body'>
                {/* <About></About> */}
                <Work></Work>
                <Education></Education>
                <Projects></Projects>
            </div>
        </ThemeProvider>
    );
}
```

### Navbar.tsx
Since Navbar is a child of ThemeProvider, it has access to its ThemeContext.
The following code is an edited version of the Navbar component; it demonstrates reading and modifying the ThemeContext.
```typescript
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Navbar() {
    const themeContext = useContext(ThemeContext);

    return (
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
    );
}
```

### index.css
Tailwind with custom variants update styling based on theme.
```css
@import "tailwindcss";

@custom-variant zelda (&:where(.zelda, .zelda *));
@custom-variant mario (&:where(.mario, .mario *));

/* Background color based on theme. Designed for elements with diverse content. */
.bg-color-1 {
    @apply bg-gray-900;
    @variant mario {
        @apply bg-red-50 border-4 border-red-600;
    }
    @variant zelda {
        background: rgba(0, 0, 0, 0.4);
        border: rgba(185, 150, 88, 1) solid;
    }
}
```

## Summary
ThemeContext and ThemeProvider function together to allow for the react app to know what theme is active and allow for the theme to be changed.
ThemeProvider also notifies Tailwind which theme is active. This allows Tailwind to apply alternate styling based on different themes.