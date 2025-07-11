import About from "./About"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Work from "./Work"
import { ThemeProvider } from "./ThemeProvider"

function App() {

    return (
        <ThemeProvider>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Work></Work>
        </ThemeProvider>
    )
}

export default App
