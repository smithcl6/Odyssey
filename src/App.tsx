// import About from "./About"
import Hero from './Hero';
import Navbar from './Navbar';
import Work from './Work';
import Projects from './Projects';
import { ThemeProvider } from './ThemeProvider';

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
                <Projects></Projects>
            </div>
        </ThemeProvider>
    );
}

export default App;
