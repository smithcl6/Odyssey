import About from "./About"
import Hero from "./Hero"
import Navbar from "./Navbar"
import { ThemeProvider } from "./ThemeProvider"

function App() {

    return (
        <ThemeProvider>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
        </ThemeProvider>
    )
}

export default App
